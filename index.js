'use strict';

const createListItem = (itemToAdd) => {
	return `
		<li>
			<span class="shopping-item">${itemToAdd}</span>
			<div class="shopping-item-controls">
				<button class="shopping-item-toggle">
					<span class="button-label">check</span>
				</button> 
				<button class="shopping-item-delete">
					<span class="button-label">delete</span>
				</button>
			</div>
		</li>
	`;
};


$(function() {

  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();

    const $input = $('#shopping-list-entry'),
    	itemToAdd = $input.val(),
    	listItem = createListItem(itemToAdd);
 
    $(".shopping-list").append(listItem);
    $input.val('');

  });

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  	$(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});
  
});
