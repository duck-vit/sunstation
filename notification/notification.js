const images = document.querySelectorAll('.notification_assets img');
images.forEach(function(image) {
    image.addEventListener('click', function() {
        const imageUrl = this.src;
        window.open(imageUrl, '_blank');
    });
});

// window.addEventListener("scroll",function(){
//         var x = pageYOffset;
//         if(x > 350){
//             document.getElementById("header_navigation").style.background = "rgb(79, 71, 78)";
//         }
//         if(x < 350){
//             document.getElementById("header_navigation").style.background = "transparent";
//         }
//         else{
//             console.log("hello")
//         }
    
//     })

// function countDescendantElements(div_notification) {
//     var node = div_notification.firstChild;
//     var cnt = 0;
//     while (node && node != div_notification) {
//         if (node.nodeType === 3) {
//             cnt++;
//             cnt += countDescendantElements(node);
//         }
//         node = node.nextSibling;
//     }
//     return(cnt);
// }

// document.getElementById("result").innerHTML += "Thông báo: " + countDescendantElements(document.getElementById("div_notification"));