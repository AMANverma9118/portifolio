
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }

        const phrases = ["Web Developer","Competitive programmer","Chess Player","Cricketer"];
        const el = document.getElementById("text2");
        let sleepTime = 100;
        let curPhraseIndex = 0;

        const writeLoop = async() => {
            while(true){
                let curword = phrases[curPhraseIndex];
                
                
                for(let i=0; i<curword.length; i++){
                    el.innerText = curword.substring(0, i + 1);
                    await sleep(sleepTime);
                    }
                    
                await sleep(sleepTime*10);

                for(let i=curword.length; i>0; i--){
                    el.innerText = curword.substring(0, i - 1);
                    await sleep(sleepTime);
                    }
                    
                    await sleep(sleepTime*5);

                    if(curPhraseIndex == phrases.length -1){
                        curPhraseIndex = 0;
                    }
                    else{
                        curPhraseIndex++;
                    }
                }
        };

        writeLoop();
    