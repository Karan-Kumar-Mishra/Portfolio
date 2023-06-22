document.addEventListener('DOMContentLoaded', function(event) {
    var text = " Hiii \n I am karan mishra"; // Change the text to your desired message
    var delay = 60; // Adjust the delay between each character typing
  
    var i = 0;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("text").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, delay);
      }
    }
    typeWriter();
  });
  document.addEventListener('DOMContentLoaded', function(event) {
    var text2 = "Hiii. I am karan kumar mishar . I'm enthusiastic software devloper specializing in builiding exceptional digital experiences."; // Change the text to your desired message
    var delay = 60; // Adjust the delay between each character typing
  
    var i = 0;
    function typeWriter() {
      if (i < text2.length) {
        document.getElementById("text2").textContent += text2.charAt(i);
        i++;
        setTimeout(typeWriter, delay);
      }
    }
  
    typeWriter();
  });
  function dark(){
    /*#112232*/
    
    
    if(document.body.style.background=="black")
    {
      document.body.style.background="#112232";
      document.getElementById('emg').src='karan.jpg';
      document.getElementById('intro').style.backgroundColor="#112232";
      document.getElementById('list_iteam').style.backgroundColor='#112232';
    }
    else{
      document.body.style.background="black";
      document.getElementById('emg').src='https://avatars.githubusercontent.com/u/93134411?v=4';
      document.getElementById('intro').style.backgroundColor="black";
      document.getElementById('list_iteam').style.backgroundColor='black';
      
    }
  }
function option(){
 document.getElementById('main').style.display="flex";
 sleep(3000).then(() => {
 document.getElementById('main').style.display="none";
       document.getElementById('list_iteam').style.display="flex";
      });
  }
  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  function hide()
  {
    document.getElementById('list_iteam').style.display="none";
  }
  
function hide_loading()
  {
 document.getElementById("main").style.display= "flex";
  setTimeout(()=> {
    document.getElementById("main").style.display= "none";
 }
 ,3000);
}
  