// node.addEventListener(type, handler [,phase]);

function log() {
  console.log('click');
}

$0.addEventListener('click', log);
$0.removeEventListener('click', log);

$0.addEventListener('click', function log() {
  console.log('click');
});

$0.removeEventListener('click', log);

////////////////////////////
$0.addEventListener('focus', function() {
  console.log('обработано внутри addeventlistener')
})

$0.removeAttribute('onfocus');

$0.onfocus = function() {
  console.log('$0.onfocus')
}

//////////////////
document.body.innerHTML = '<button>Button';
var button = document.querySelector('button');
function showMessage(e) {
  switch(e.which) {
    case 1: {
      console.log('left click');
      break;
    }
    case 2: {
      console.log('middle click');
      break;
    }
    case 3: {
      console.log('right click');
      break;
    }
  }
}
button.addEventListener('mousedown', showMessage)

/////////////////////
document.body.innerHTML = '<button>Button';
var button = document.querySelector('button');
function showMessage(e) {
  switch(e.which) {
    case 1: {
      console.log('left click');
      break;
    }
    case 2: {
      console.log('middle click');
      break;
    }
    case 3: {
      console.log('right click');
      break;
    }
  }
}
button.addEventListener('mousedown', showMessage)
