document.getElementById('displayGrid').addEventListener('click', function(){
    document.querySelector('.flex-and-grid').classList.add('hide');
    document.querySelector('.main-access').classList.add('hide');
    document.querySelector('.grid').classList.remove('hide');
    document.getElementById('displayGrid').style.cursor = "default"
    document.getElementById('displayFlexAndGrid').style.cursor = "pointer";
})

document.getElementById('displayFlexAndGrid').addEventListener('click', function(){
    document.querySelector('.grid').classList.add('hide');
    document.querySelector('.main-access').classList.add('hide');
    document.querySelector('.flex-and-grid').classList.remove('hide');
    document.getElementById('displayFlexAndGrid').style.cursor = "default";
    document.getElementById('displayGrid').style.cursor = "pointer";
})

document.querySelector('header nav > div').addEventListener('click', function(){
    document.querySelector('.grid').classList.add('hide');
    document.querySelector('.flex-and-grid').classList.add('hide');
    document.querySelector('.main-access').classList.remove('hide');
    document.getElementById('displayFlexAndGrid').style.cursor = "pointer";
    document.getElementById('displayGrid').style.cursor = "pointer";
})