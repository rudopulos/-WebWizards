var slideIndex=1,slideIndex2=1;function plusSlides(e){showSlides(slideIndex+=e),showSlides2(slideIndex2+=e)}function currentSlide(e){showSlides(slideIndex=e),showSlides2(slideIndex2=e)}function showSlides(e){var s,l=document.getElementsByClassName("mySlides"),d=document.getElementsByClassName("dot");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";for(s=0;s<d.length;s++)d[s].className=d[s].className.replace(" active","");l[slideIndex-1].style.display="block",d[slideIndex-1].className+=" active"}function showSlides2(e){var s,l=document.getElementsByClassName("mySlides2"),d=document.getElementsByClassName("dot2");for(e>l.length&&(slideIndex2=1),e<1&&(slideIndex2=l.length),s=0;s<l.length;s++)l[s].style.display="none";for(s=0;s<d.length;s++)d[s].className=d[s].className.replace(" active","");l[slideIndex2-1].style.display="block",d[slideIndex2-1].className+=" active"}showSlides(slideIndex),showSlides2(slideIndex2);
//# sourceMappingURL=index.5c6b074f.js.map