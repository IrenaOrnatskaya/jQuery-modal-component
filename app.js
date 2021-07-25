'use strict';

$(document).ready( () => {
    console.log('jQuery is ready for manipulations with DOM');
    let modal = new Modal();
    modal.show();
    modal.hide();
    
});
window.onload = () => {
    console.log('Document loaded');
};

class Modal{
    constructor () {
        $('.modal-overlay').html('');
        $('.modal-overlay').html(`<div class="modal-content">
            <h3>Modal window</h3>
            <button class='close-button'>OK</button>
            </div>`);
    } 
    show(){
        $('#toggle-modal').click(function(){
            $('.modal-overlay').show();
        });
    }
    hide(){
        $('.modal-overlay .close-button').click(function(){
            $('.modal-overlay').hide();
            $('#toggle-modal').prop('checked', false);
        })
    }
}

