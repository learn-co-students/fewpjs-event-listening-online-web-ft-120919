function addingEventListener() {
    const input = document.getElementById('input'); //node that will do listening
    //first argument below is event name to listen for
    //second argument is callback function (work to be executed when the node "hears" the event)
    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });
}
