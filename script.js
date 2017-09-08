var url = 'https://restcountries.eu/rest/v1/name/'; // utworzenie zmiennej przechowującej adres strony 
var countriesList = $('#countries'); // utworzenie zmiennej ktora przechowuje pobrany id "#countries"

// wyszukiwanie krajow 
$('#search').click(searchCountries); // pobranie search i po kliknięciu wywołanie funkcji "searchCountries"





function searchCountries() {
    var countryName = $('#country-name').val(); // pobiera wartośc wpisaną przez użytkownika 
    if(!countryName.length) countryName = 'Poland';  // jeżeli nic nie wpiszemy w przeglądarke zwoci ciąg znakow "Poland"
    $.ajax({  //obiekta z trzema właściwościami 
        url: url + countryName, // pierwsza właściwośc adres strony + zmienna przechowująca pobraną wartośc wpisaną przez urzytkownika 
        method: 'GET', // drugi parametr otwarcie połaczenia 
        success: showCountriesList // 3 parametr funkcja 
    });
}



function showCountriesList(resp) {// funkcja z parametrem "rest"
    countriesList.empty(); // zmienna przechowująca "#countries" i metoda "empty" ktora usuwa wszystkie węzły podrzędne czyli w tym przypadku li 
    resp.forEach(function(item) {
        
        //Tworzy nowy element listy 
        resp.forEach(function(item){
            $('<li>').text('COUNTRIES:').appendTo(countriesList);
            $('<li>').text(item.name).appendTo(countriesList);

            $('<li>').text('REGION:').appendTo(countriesList);
            $('<li>').text(item.region).appendTo(countriesList);

            $('<li>').text('CAPITAL:').appendTo(countriesList);
            $('<li>').text(item.capital).appendTo(countriesList);

            $('<li>').text('CURRIENCES:').appendTo(countriesList);
            $('<li>').text(item.currencies).appendTo(countriesList);

            $('<li>').text('TIME ZONES:').appendTo(countriesList);
            $('<li>').text(item.timezones).appendTo(countriesList);

            $('<li>').text('POPULATION:').appendTo(countriesList);
            $('<li>').text(item.population).appendTo(countriesList);


            
            $('li:even').addClass('right');
            $('li:odd').addClass('left');
            
        });
        
    });
}





