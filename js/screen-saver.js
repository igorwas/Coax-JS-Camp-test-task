function inactivityTracker() {
    let inactiveTimer;

    window.addEventListener("load", resetTimer);
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("mousedown", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("keypress", resetTimer);

    function resetTimer() {
        clearTimeout(inactiveTimer);
        deleteElement("screen-saver-image");
        document.body.style.backgroundColor = "white";
        inactiveTimer = setTimeout(startInactiveMode, 10000);
    }

    function startInactiveMode() {
        let imagesUrls = 
            ["https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060", 
            "https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560",
            "https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200",
            "https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
            "https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400",
            "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260",
            "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"];
        document.body.style.backgroundColor = "lightgray";

        addImage("img-holder",imagesUrls[Math.floor(Math.random() * imagesUrls.length)]);

        inactiveTimer = setTimeout(replaceImage, 5000);

        function replaceImage(){
            deleteElement("screen-saver-image");
            addImage("img-holder", imagesUrls[Math.floor(Math.random() * imagesUrls.length)]);
            inactiveTimer = setTimeout(replaceImage, 5000);
        }
    }
}

function addImage(parentBlock,url){
    let img = document.createElement("img");
    img.src = url;
    img.setAttribute("id","screen-saver-image");
    img.onload = function(){
        img.style.position = "absolute";
        let random = Math.random();
        img.style.top = (window.window.innerHeight > this.height) ? (Math.floor(random * (window.window.innerHeight - this.height))) +"px" : "0px";
        img.style.left = (window.window.innerWidth > this.width) ?  (Math.floor(random * (window.window.innerWidth - this.width))) + "px" : "0px;"
        
        let src = document.getElementById(parentBlock);
        src.appendChild(img);
    };
}

function deleteElement(id){
    if(document.getElementById(id)){
        document.getElementById(id).outerHTML = "";
    }
}

inactivityTracker();