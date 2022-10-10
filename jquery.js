$(".nav").click(function(){
    $("rotate").toggle()
})

var imgslide = $(".slide")

imgslide.hide()

imgslide.eq(0).show()

var curr = 0
var min = 0
var max = imgslide.length - 1

$("#right").click(function(){
    imgslide.eq(curr).hide()
    curr+=1
    if(curr > max){
        curr = min
    }
    imgslide.eq(curr).show()
})

$("#left").click(function(){
    imgslide.eq(curr).hide()
    curr-=1
    if(curr < min){
        curr = max
    }
    imgslide.eq(curr).show()
})