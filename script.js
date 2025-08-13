 const countries = [
  { name: "Afghanistan", clue: "Located in Asia, capital city is Kabul.", continent: "Asia" },
  { name: "Albania", clue: "Located in Europe, capital city is Tirana.", continent: "Europe" },
  { name: "Algeria", clue: "Located in Africa, capital city is Algiers.", continent: "Africa" },
  { name: "Andorra", clue: "Located in Europe, capital city is Andorra la Vella.", continent: "Europe" },
  { name: "Angola", clue: "Located in Africa, capital city is Luanda.", continent: "Africa" },
  { name: "Antigua and Barbuda", clue: "Located in North America, capital city is St. John's.", continent: "North America" },
  { name: "Argentina", clue: "Located in South America, capital city is Buenos Aires.", continent: "South America" },
  { name: "Armenia", clue: "Located in Asia, capital city is Yerevan.", continent: "Asia" },
  { name: "Australia", clue: "Located in Oceania, famous for kangaroos and the Outback.", continent: "Oceania" },
  { name: "Austria", clue: "Located in Europe, capital city is Vienna.", continent: "Europe" },
  { name: "Azerbaijan", clue: "Located in Asia, capital city is Baku.", continent: "Asia" },
  { name: "Bahamas", clue: "Located in North America, capital city is Nassau.", continent: "North America" },
  { name: "Bahrain", clue: "Located in Asia, capital city is Manama.", continent: "Asia" },
  { name: "Bangladesh", clue: "Located in Asia, capital city is Dhaka.", continent: "Asia" },
  { name: "Barbados", clue: "Located in North America, capital city is Bridgetown.", continent: "North America" },
  { name: "Belarus", clue: "Located in Europe, capital city is Minsk.", continent: "Europe" },
  { name: "Belgium", clue: "Located in Europe, capital city is Brussels.", continent: "Europe" },
  { name: "Belize", clue: "Located in North America, capital city is Belmopan.", continent: "North America" },
  { name: "Benin", clue: "Located in Africa, capital city is Porto-Novo.", continent: "Africa" },
  { name: "Bhutan", clue: "Located in Asia, capital city is Thimphu.", continent: "Asia" },
  { name: "Bolivia", clue: "Located in South America, capitals are Sucre and La Paz.", continent: "South America" },
  { name: "Bosnia and Herzegovina", clue: "Located in Europe, capital city is Sarajevo.", continent: "Europe" },
  { name: "Botswana", clue: "Located in Africa, capital city is Gaborone.", continent: "Africa" },
  { name: "Brazil", clue: "Located in South America, capital city is Brasília.", continent: "South America" },
  { name: "Brunei", clue: "Located in Asia, capital city is Bandar Seri Begawan.", continent: "Asia" },
  { name: "Bulgaria", clue: "Located in Europe, capital city is Sofia.", continent: "Europe" },
  { name: "Burkina Faso", clue: "Located in Africa, capital city is Ouagadougou.", continent: "Africa" },
  { name: "Burundi", clue: "Located in Africa, capital city is Gitega.", continent: "Africa" },
  { name: "Cabo Verde", clue: "Located in Africa, capital city is Praia.", continent: "Africa" },
  { name: "Cambodia", clue: "Located in Asia, capital city is Phnom Penh.", continent: "Asia" },
  { name: "Cameroon", clue: "Located in Africa, capital city is Yaoundé.", continent: "Africa" },
  { name: "Canada", clue: "Located in North America, capital city is Ottawa.", continent: "North America" },
  { name: "Central African Republic", clue: "Located in Africa, capital city is Bangui.", continent: "Africa" },
  { name: "Chad", clue: "Located in Africa, capital city is N'Djamena.", continent: "Africa" },
  { name: "Chile", clue: "Located in South America, capital city is Santiago.", continent: "South America" },
  { name: "China", clue: "Located in Asia, capital city is Beijing.", continent: "Asia" },
  { name: "Colombia", clue: "Located in South America, capital city is Bogotá.", continent: "South America" },
  { name: "Comoros", clue: "Located in Africa, capital city is Moroni.", continent: "Africa" },
  { name: "Costa Rica", clue: "Located in North America, capital city is San José.", continent: "North America" },
  { name: "Croatia", clue: "Located in Europe, capital city is Zagreb.", continent: "Europe" },
  { name: "Cuba", clue: "Located in North America, capital city is Havana.", continent: "North America" },
  { name: "Cyprus", clue: "Located in Europe, capital city is Nicosia.", continent: "Europe" },
  { name: "Czech Republic", clue: "Located in Europe, capital city is Prague.", continent: "Europe" },
  { name: "Democratic Republic of the Congo", clue: "Located in Africa, capital city is Kinshasa.", continent: "Africa" },
  { name: "Denmark", clue: "Located in Europe, capital city is Copenhagen.", continent: "Europe" },
  { name: "Djibouti", clue: "Located in Africa, capital city is Djibouti.", continent: "Africa" },
  { name: "Dominica", clue: "Located in North America, capital city is Roseau.", continent: "North America" },
  { name: "Dominican Republic", clue: "Located in North America, capital city is Santo Domingo.", continent: "North America" },
  { name: "Ecuador", clue: "Located in South America, capital city is Quito.", continent: "South America" },
  { name: "Egypt", clue: "Located in Africa, famous for pyramids and the Nile River.", continent: "Africa" },
  { name: "El Salvador", clue: "Located in North America, capital city is San Salvador.", continent: "North America" },
  { name: "Equatorial Guinea", clue: "Located in Africa, capital city is Malabo.", continent: "Africa" },
  { name: "Eritrea", clue: "Located in Africa, capital city is Asmara.", continent: "Africa" },
  { name: "Estonia", clue: "Located in Europe, capital city is Tallinn.", continent: "Europe" },
  { name: "Eswatini", clue: "Located in Africa, capital city is Mbabane.", continent: "Africa" },
  { name: "Ethiopia", clue: "Located in Africa, capital city is Addis Ababa.", continent: "Africa" },
  { name: "Fiji", clue: "Located in Oceania, capital city is Suva.", continent: "Oceania" },
  { name: "Finland", clue: "Located in Europe, capital city is Helsinki.", continent: "Europe" },
  { name: "France", clue: "Located in Europe, capital city is Paris.", continent: "Europe" },
  { name: "Gabon", clue: "Located in Africa, capital city is Libreville.", continent: "Africa" },
  { name: "Gambia", clue: "Located in Africa, capital city is Banjul.", continent: "Africa" },
  { name: "Georgia", clue: "Located in Asia, capital city is Tbilisi.", continent: "Asia" },
  { name: "Germany", clue: "Located in Europe, capital city is Berlin.", continent: "Europe" },
  { name: "Ghana", clue: "Located in Africa, capital city is Accra.", continent: "Africa" },
  { name: "Greece", clue: "Located in Europe, capital city is Athens.", continent: "Europe" },
  { name: "Grenada", clue: "Located in North America, capital city is St. George's.", continent: "North America" },
  { name: "Guatemala", clue: "Located in North America, capital city is Guatemala City.", continent: "North America" },
  { name: "Guinea", clue: "Located in Africa, capital city is Conakry.", continent: "Africa" },
  { name: "Guinea-Bissau", clue: "Located in Africa, capital city is Bissau.", continent: "Africa" },
  { name: "Guyana", clue: "Located in South America, capital city is Georgetown.", continent: "South America" },
  { name: "Haiti", clue: "Located in North America, capital city is Port-au-Prince.", continent: "North America" },
  { name: "Honduras", clue: "Located in North America, capital city is Tegucigalpa.", continent: "North America" },
  { name: "Hungary", clue: "Located in Europe, capital city is Budapest.", continent: "Europe" },
  { name: "Iceland", clue: "Located in Europe, capital city is Reykjavik.", continent: "Europe" },
  { name: "India", clue: "Located in Asia, home of the Taj Mahal.", continent: "Asia" },
  { name: "Indonesia", clue: "Located in Asia, capital city is Jakarta.", continent: "Asia" },
  { name: "Iran", clue: "Located in Asia, capital city is Tehran.", continent: "Asia" },
  { name: "Iraq", clue: "Located in Asia, capital city is Baghdad.", continent: "Asia" },
  { name: "Ireland", clue: "Located in Europe, capital city is Dublin.", continent: "Europe" },
  { name: "Israel", clue: "Located in Asia, capital city is Jerusalem.", continent: "Asia" },
  { name: "Italy", clue: "Located in Europe, capital city is Rome.", continent: "Europe" },
  { name: "Jamaica", clue: "Located in North America, capital city is Kingston.", continent: "North America" },
  { name: "Japan", clue: "Located in Asia, capital city is Tokyo.", continent: "Asia" },
  { name: "Jordan", clue: "Located in Asia, capital city is Amman.", continent: "Asia" },
  { name: "Kazakhstan", clue: "Located in Asia, capital city is Astana.", continent: "Asia" },
  { name: "Kenya", clue: "Located in Africa, capital city is Nairobi.", continent: "Africa" },
  { name: "Kiribati", clue: "Located in Oceania, capital city is South Tarawa.", continent: "Oceania" },
  { name: "Kuwait", clue: "Located in Asia, capital city is Kuwait City.", continent: "Asia" },
  { name: "Kyrgyzstan", clue: "Located in Asia, capital city is Bishkek.", continent: "Asia" },
  { name: "Laos", clue: "Located in Asia, capital city is Vientiane.", continent: "Asia" },
  { name: "Latvia", clue: "Located in Europe, capital city is Riga.", continent: "Europe" },
  { name: "Lebanon", clue: "Located in Asia, capital city is Beirut.", continent: "Asia" },
  { name: "Lesotho", clue: "Located in Africa, capital city is Maseru.", continent: "Africa" },
  { name: "Liberia", clue: "Located in Africa, capital city is Monrovia.", continent: "Africa" },
  { name: "Libya", clue: "Located in Africa, capital city is Tripoli.", continent: "Africa" },
  { name: "Liechtenstein", clue: "Located in Europe, capital city is Vaduz.", continent: "Europe" },
  { name: "Lithuania", clue: "Located in Europe, capital city is Vilnius.", continent: "Europe" },
  { name: "Luxembourg", clue: "Located in Europe, capital city is Luxembourg City.", continent: "Europe" },
  { name: "Madagascar", clue: "Located in Africa, capital city is Antananarivo.", continent: "Africa" },
  { name: "Malawi", clue: "Located in Africa, capital city is Lilongwe.", continent: "Africa" },
  { name: "Malaysia", clue: "Located in Asia, capital city is Kuala Lumpur.", continent: "Asia" },
  { name: "Maldives", clue: "Located in Asia, capital city is Malé.", continent: "Asia" },
  { name: "Mali", clue: "Located in Africa, capital city is Bamako.", continent: "Africa" },
  { name: "Malta", clue: "Located in Europe, capital city is Valletta.", continent: "Europe" },
  { name: "Marshall Islands", clue: "Located in Oceania, capital city is Majuro.", continent: "Oceania" },
  { name: "Mauritania", clue: "Located in Africa, capital city is Nouakchott.", continent: "Africa" },
  { name: "Mauritius", clue: "Located in Africa, capital city is Port Louis.", continent: "Africa" },
  { name: "Mexico", clue: "Located in North America, known for tacos and Aztec history.", continent: "North America" },
  { name: "Micronesia", clue: "Located in Oceania, capital city is Palikir.", continent: "Oceania" },
  { name: "Moldova", clue: "Located in Europe, capital city is Chișinău.", continent: "Europe" },
  { name: "Monaco", clue: "Located in Europe, capital city is Monaco.", continent: "Europe" },
  { name: "Mongolia", clue: "Located in Asia, capital city is Ulaanbaatar.", continent: "Asia" },
  { name: "Montenegro", clue: "Located in Europe, capital city is Podgorica.", continent: "Europe" },
  { name: "Morocco", clue: "Located in Africa, capital city is Rabat.", continent: "Africa" },
  { name: "Mozambique", clue: "Located in Africa, capital city is Maputo.", continent: "Africa" },
  { name: "Myanmar", clue: "Located in Asia, capital city is Naypyidaw.", continent: "Asia" },
  { name: "Namibia", clue: "Located in Africa, capital city is Windhoek.", continent: "Africa" },
  { name: "Nauru", clue: "Located in Oceania, capital city is Yaren District.", continent: "Oceania" },
  { name: "Nepal", clue: "Located in Asia, capital city is Kathmandu.", continent: "Asia" },
  { name: "Netherlands", clue: "Located in Europe, capital city is Amsterdam.", continent: "Europe" },
  { name: "New Zealand", clue: "Located in Oceania, capital city is Wellington.", continent: "Oceania" },
  { name: "Nicaragua", clue: "Located in North America, capital city is Managua.", continent: "North America" },
  { name: "Niger", clue: "Located in Africa, capital city is Niamey.", continent: "Africa" },
  { name: "Nigeria", clue: "Located in Africa, capital city is Abuja.", continent: "Africa" },
  { name: "North Korea", clue: "Located in Asia, capital city is Pyongyang.", continent: "Asia" },
  { name: "North Macedonia", clue: "Located in Europe, capital city is Skopje.", continent: "Europe" },
  { name: "Norway", clue: "Located in Europe, capital city is Oslo.", continent: "Europe" },
  { name: "Oman", clue: "Located in Asia, capital city is Muscat.", continent: "Asia" },
  { name: "Pakistan", clue: "Located in Asia, capital city is Islamabad.", continent: "Asia" },
  { name: "Palau", clue: "Located in Oceania, capital city is Ngerulmud.", continent: "Oceania" },
  { name: "Palestine", clue: "Located in Asia, capital city is Ramallah (administrative).", continent: "Asia" },
  { name: "Panama", clue: "Located in North America, capital city is Panama City.", continent: "North America" },
  { name: "Papua New Guinea", clue: "Located in Oceania, capital city is Port Moresby.", continent: "Oceania" },
  { name: "Paraguay", clue: "Located in South America, capital city is Asunción.", continent: "South America" },
  { name: "Peru", clue: "Located in South America, capital city is Lima.", continent: "South America" },
  { name: "Philippines", clue: "Located in Asia, capital city is Manila.", continent: "Asia" },
  { name: "Poland", clue: "Located in Europe, capital city is Warsaw.", continent: "Europe" },
  { name: "Portugal", clue: "Located in Europe, capital city is Lisbon.", continent: "Europe" },
  { name: "Qatar", clue: "Located in Asia, capital city is Doha.", continent: "Asia" },
  { name: "Republic of the Congo", clue: "Located in Africa, capital city is Brazzaville.", continent: "Africa" },
  { name: "Romania", clue: "Located in Europe, capital city is Bucharest.", continent: "Europe" },
  { name: "Russia", clue: "Located in Europe/Asia, largest country in the world.", continent: "Europe/Asia" },
  { name: "Rwanda", clue: "Located in Africa, capital city is Kigali.", continent: "Africa" },
  { name: "Saint Kitts and Nevis", clue: "Located in North America, capital city is Basseterre.", continent: "North America" },
  { name: "Saint Lucia", clue: "Located in North America, capital city is Castries.", continent: "North America" },
  { name: "Saint Vincent and the Grenadines", clue: "Located in North America, capital city is Kingstown.", continent: "North America" },
  { name: "Samoa", clue: "Located in Oceania, capital city is Apia.", continent: "Oceania" },
  { name: "San Marino", clue: "Located in Europe, capital city is San Marino.", continent: "Europe" },
  { name: "Sao Tome and Principe", clue: "Located in Africa, capital city is São Tomé.", continent: "Africa" },
  { name: "Saudi Arabia", clue: "Located in Asia, capital city is Riyadh.", continent: "Asia" },
  { name: "Senegal", clue: "Located in Africa, capital city is Dakar.", continent: "Africa" },
  { name: "Serbia", clue: "Located in Europe, capital city is Belgrade.", continent: "Europe" },
  { name: "Seychelles", clue: "Located in Africa, capital city is Victoria.", continent: "Africa" },
  { name: "Sierra Leone", clue: "Located in Africa, capital city is Freetown.", continent: "Africa" },
  { name: "Singapore", clue: "Located in Asia, capital city is Singapore.", continent: "Asia" },
  { name: "Slovakia", clue: "Located in Europe, capital city is Bratislava.", continent: "Europe" },
  { name: "Slovenia", clue: "Located in Europe, capital city is Ljubljana.", continent: "Europe" },
  { name: "Solomon Islands", clue: "Located in Oceania, capital city is Honiara.", continent: "Oceania" },
  { name: "Somalia", clue: "Located in Africa, capital city is Mogadishu.", continent: "Africa" },
  { name: "South Africa", clue: "Located in Africa, capitals are Pretoria, Cape Town, Bloemfontein.", continent: "Africa" },
  { name: "South Korea", clue: "Located in Asia, capital city is Seoul.", continent: "Asia" },
  { name: "South Sudan", clue: "Located in Africa, capital city is Juba.", continent: "Africa" },
  { name: "Spain", clue: "Located in Europe, famous for flamenco and paella.", continent: "Europe" },
  { name: "Sri Lanka", clue: "Located in Asia, capital city is Sri Jayawardenepura Kotte.", continent: "Asia" },
  { name: "Sudan", clue: "Located in Africa, capital city is Khartoum.", continent: "Africa" },
  { name: "Suriname", clue: "Located in South America, capital city is Paramaribo.", continent: "South America" },
  { name: "Sweden", clue: "Located in Europe, capital city is Stockholm.", continent: "Europe" },
  { name: "Switzerland", clue: "Located in Europe, capital city is Bern.", continent: "Europe" },
  { name: "Syria", clue: "Located in Asia, capital city is Damascus.", continent: "Asia" },
  { name: "Tajikistan", clue: "Located in Asia, capital city is Dushanbe.", continent: "Asia" },
  { name: "Tanzania", clue: "Located in Africa, capital city is Dodoma.", continent: "Africa" },
  { name: "Thailand", clue: "Located in Asia, famous for temples and beaches.", continent: "Asia" },
  { name: "Timor-Leste", clue: "Located in Asia, capital city is Dili.", continent: "Asia" },
  { name: "Togo", clue: "Located in Africa, capital city is Lomé.", continent: "Africa" },
  { name: "Tonga", clue: "Located in Oceania, capital city is Nukuʻalofa.", continent: "Oceania" },
  { name: "Trinidad and Tobago", clue: "Located in North America, capital city is Port of Spain.", continent: "North America" },
  { name: "Tunisia", clue: "Located in Africa, capital city is Tunis.", continent: "Africa" },
  { name: "Turkey", clue: "Located in Europe/Asia, capital city is Ankara.", continent: "Europe/Asia" },
  { name: "Turkmenistan", clue: "Located in Asia, capital city is Ashgabat.", continent: "Asia" },
  { name: "Tuvalu", clue: "Located in Oceania, capital city is Funafuti.", continent: "Oceania" },
  { name: "Uganda", clue: "Located in Africa, capital city is Kampala.", continent: "Africa" },
  { name: "Ukraine", clue: "Located in Europe, capital city is Kyiv.", continent: "Europe" },
  { name: "United Arab Emirates", clue: "Located in Asia, capital city is Abu Dhabi.", continent: "Asia" },
  { name: "United Kingdom", clue: "Located in Europe, famous for London and Big Ben.", continent: "Europe" },
  { name: "United States", clue: "Located in North America, capital city is Washington, D.C.", continent: "North America" },
  { name: "Uruguay", clue: "Located in South America, capital city is Montevideo.", continent: "South America" },
  { name: "Uzbekistan", clue: "Located in Asia, capital city is Tashkent.", continent: "Asia" },
  { name: "Vanuatu", clue: "Located in Oceania, capital city is Port Vila.", continent: "Oceania" },
  { name: "Vatican City", clue: "Located in Europe, smallest independent state in the world.", continent: "Europe" },
  { name: "Venezuela", clue: "Located in South America, capital city is Caracas.", continent: "South America" },
  { name: "Vietnam", clue: "Located in Asia, capital city is Hanoi.", continent: "Asia" },
  { name: "Yemen", clue: "Located in Asia, capital city is Sana'a.", continent: "Asia" },
  { name: "Zambia", clue: "Located in Africa, capital city is Lusaka.", continent: "Africa" },
  { name: "Zimbabwe", clue: "Located in Africa, famous for Victoria Falls.", continent: "Africa" }



    // Add more countries if needed...
  ];

  let selectedCountry = null;
  let displayWord = [];
  let guessedLetters = [];
  let wrongGuesses = [];
  const maxWrong = 6;

  const stickmanParts = [
    document.getElementById('head'),
    document.getElementById('body'),
    document.getElementById('leftArm'),
    document.getElementById('rightArm'),
    document.getElementById('leftLeg'),
    document.getElementById('rightLeg')
  ];

  const clueDiv = document.getElementById('clue');
  const wordDiv = document.getElementById('word');
  const input = document.getElementById('letterInput');
  const guessBtn = document.getElementById('guessBtn');
  const newGameBtn = document.getElementById('newGameBtn');
  const messageDiv = document.getElementById('message');
  const wrongLettersDiv = document.getElementById('wrongLetters');

  function chooseCountry() {
    const idx = Math.floor(Math.random() * countries.length);
    selectedCountry = countries[idx];
  }

  function resetGame() {
    guessedLetters = [];
    wrongGuesses = [];
    stickmanParts.forEach(part => (part.style.display = 'none'));
    messageDiv.textContent = '';
    wrongLettersDiv.textContent = 'Wrong guesses: ';
    clueDiv.textContent = '';
    chooseCountry();
    displayWord = [];
    for (const char of selectedCountry.name.toUpperCase()) {
      if (char === ' ' || char === '-' || char === '\'') {
        displayWord.push(char);
      } else {
        displayWord.push('_');
      }
    }
    wordDiv.textContent = displayWord.join(' ');
  }

  function updateWordDisplay() {
    wordDiv.textContent = displayWord.join(' ');
  }

  function handleGuess() {
    const letter = input.value.toUpperCase();
    input.value = '';
    if (!letter.match(/[A-Z]/) || guessedLetters.includes(letter)) {
      return;
    }

    guessedLetters.push(letter);

    if (selectedCountry.name.toUpperCase().includes(letter)) {
      for (let i = 0; i < selectedCountry.name.length; i++) {
        if (selectedCountry.name[i].toUpperCase() === letter) {
          displayWord[i] = selectedCountry.name[i].toUpperCase();
        }
      }
      updateWordDisplay();
      if (!displayWord.includes('_')) {
        messageDiv.textContent = '🎉 You guessed it!';
      }
    } else {
      wrongGuesses.push(letter);
      wrongLettersDiv.textContent = 'Wrong guesses: ' + wrongGuesses.join(', ');
      if (wrongGuesses.length <= maxWrong) {
        stickmanParts[wrongGuesses.length - 1].style.display = 'block';
      }

      if (wrongGuesses.length === 2) {
        clueDiv.textContent = `Continent Hint: ${selectedCountry.continent}`;
      } else if (wrongGuesses.length === 4) {
        clueDiv.textContent = `Clue: ${selectedCountry.clue}`;
      }

      if (wrongGuesses.length === maxWrong) {
        messageDiv.textContent = `💀 Game Over! The country was: ${selectedCountry.name}`;
        displayWord = selectedCountry.name.toUpperCase().split('');
        updateWordDisplay();
      }
    }
  }

  guessBtn.addEventListener('click', handleGuess);
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      handleGuess();
    }
  });
  newGameBtn.addEventListener('click', resetGame);

  resetGame();
