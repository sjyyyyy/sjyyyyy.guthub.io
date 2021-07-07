window.onload=function(){
    
    var content = document.getElementsByClassName("content")[0]
    var contentWIdth = content.offsetWidth 

    var imgs = content.children
    var imgsWidth = imgs[0].offsetWidth

    var nums = Math.floor(contentWIdth/imgsWidth)
    console.log(nums)

    var arrHeight = []

    for(var i=0; i<imgs.length; i++)
    {
        if(i<nums)
        {
            arrHeight.push(imgs[i].offsetHeight)
        }
        else
        {
            var obj = {
                minH:arrHeight[0],
                minI:0
            }
            for(var j=0; j<arrHeight.length; j++)
            {
                if(arrHeight[j]<obj.minH)
                {
                    obj.minH=arrHeight[j],
                    obj.minI=j
                }
            }
            console.log(obj);
            imgs[i].style.position="absolute"
            imgs[i].style.left=imgs[obj.minI].offsetLeft+'px'
            imgs[i].style.top=obj.minH+'px'
            arrHeight[obj.minI]=arrHeight[obj.minI]+imgs[i].offsetHeight
        }
    }
    console.log(arrHeight);

}