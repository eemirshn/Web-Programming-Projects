let counter = document.getElementById('counter');
        let incr = document.querySelector('.incr');
        let decr = document.querySelector('.decr');

        let count = 0;
        incr.addEventListener("click", ()=>{
            count++;
            updateDisplay();
        });
        decr.addEventListener("click", ()=>{
            count--;
            updateDisplay();
        });
        function updateDisplay(){
            counter.innerHTML = count;
        };