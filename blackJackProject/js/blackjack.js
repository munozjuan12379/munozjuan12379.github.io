let secretCard = 'purple_back.png';
let betWin = 0;
let deck = {
    cards: [
        {'img': '2C.png', 'value': 2, suit: 'clubs', 'dealt': false},
        {'img': '2H.png', 'value': 2, suit: 'hearts', 'dealt': false},
        {'img': '2D.png', 'value': 2, suit: 'diamonds', 'dealt': false},
        {'img': '2S.png', 'value': 2, suit: 'spades', 'dealt': false},

        {'img': '3C.png', 'value': 3, suit: 'clubs', 'dealt': false},
        {'img': '3H.png', 'value': 3, suit: 'hearts', 'dealt': false},
        {'img': '3D.png', 'value': 3, suit: 'diamonds', 'dealt': false},
        {'img': '3S.png', 'value': 3, suit: 'spades', 'dealt': false},

        {'img': '4S.png', 'value': 4, suit: 'spades', 'dealt': false},
        {'img': '4H.png', 'value': 4, suit: 'hearts', 'dealt': false},
        {'img': '4D.png', 'value': 4, suit: 'diamonds', 'dealt': false},
        {'img': '4C.png', 'value': 4, suit: 'clubs', 'dealt': false},

        {'img': '5S.png', 'value': 5, suit: 'spades', 'dealt': false},
        {'img': '5H.png', 'value': 5, suit: 'hearts', 'dealt': false},
        {'img': '5D.png', 'value': 5, suit: 'diamonds', 'dealt': false},
        {'img': '5C.png', 'value': 5, suit: 'clubs', 'dealt': false},

        {'img': '6S.png', 'value': 6, suit: 'spades', 'dealt': false},
        {'img': '6H.png', 'value': 6, suit: 'hearts', 'dealt': false},
        {'img': '6D.png', 'value': 6, suit: 'diamonds', 'dealt': false},
        {'img': '6C.png', 'value': 6, suit: 'clubs', 'dealt': false},

        {'img': '7S.png', 'value': 7, suit: 'spades', 'dealt': false},
        {'img': '7H.png', 'value': 7, suit: 'hearts', 'dealt': false},
        {'img': '7D.png', 'value': 7, suit: 'diamonds', 'dealt': false},
        {'img': '7C.png', 'value': 7, suit: 'clubs', 'dealt': false},

        {'img': '8S.png', 'value': 8, suit: 'spades', 'dealt': false},
        {'img': '8H.png', 'value': 8, suit: 'hearts', 'dealt': false},
        {'img': '8D.png', 'value': 8, suit: 'diamonds', 'dealt': false},
        {'img': '8C.png', 'value': 8, suit: 'clubs', 'dealt': false},

        {'img': '9S.png', 'value': 9, suit: 'spades', 'dealt': false},
        {'img': '9H.png', 'value': 9, suit: 'hearts', 'dealt': false},
        {'img': '9D.png', 'value': 9, suit: 'diamonds', 'dealt': false},
        {'img': '9C.png', 'value': 9, suit: 'clubs', 'dealt': false},

        {'img': '10S.png', 'value': 10, suit: 'spades', 'dealt': false},
        {'img': '10H.png', 'value': 10, suit: 'hearts', 'dealt': false},
        {'img': '10D.png', 'value': 10, suit: 'diamonds', 'dealt': false},
        {'img': '10C.png', 'value': 10, suit: 'clubs', 'dealt': false},

        {'img': 'JS.png', 'value': 10, suit: 'spades', 'dealt': false},
        {'img': 'JH.png', 'value': 10, suit: 'hearts', 'dealt': false},
        {'img': 'JD.png', 'value': 10, suit: 'diamonds', 'dealt': false},
        {'img': 'JC.png', 'value': 10, suit: 'clubs', 'dealt': false},

        {'img': 'QS.png', 'value': 10, suit: 'spades', 'dealt': false},
        {'img': 'QH.png', 'value': 10, suit: 'hearts', 'dealt': false},
        {'img': 'QD.png', 'value': 10, suit: 'diamonds', 'dealt': false},
        {'img': 'QC.png', 'value': 10, suit: 'clubs', 'dealt': false},

        {'img': 'KS.png', 'value': 10, suit: 'spades', 'dealt': false},
        {'img': 'KH.png', 'value': 10, suit: 'hearts', 'dealt': false},
        {'img': 'KD.png', 'value': 10, suit: 'diamonds', 'dealt': false},
        {'img': 'KC.png', 'value': 10, suit: 'clubs', 'dealt': false},

        {'img': 'AS.png', 'value': 11, suit: 'spades', 'dealt': false},
        {'img': 'AH.png', 'value': 11, suit: 'hearts', 'dealt': false},
        {'img': 'AD.png', 'value': 11, suit: 'diamonds', 'dealt': false},
        {'img': 'AC.png', 'value': 11, suit: 'clubs', 'dealt': false}
    ],
    dealtCards : 0,
    getCard : function(hand){
        let gotGoodCard = false;
        let card = null
        while ( !gotGoodCard ){
            let rNum = Math.floor( Math.random() * deck.cards.length );
            card = deck.cards[rNum];
            if ( !card.dealt ){
                card.dealt = true;
                this.dealtCards += 1;
                return card;
            }
        }
        return card;
    },
    reshuffle: function() {
        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i].dealt = false;
        }
    }
}
let User = {
    name: "User",
    hand: [],
    bet: 0,
    handPts: 0,
    numHits: 0,
    balance: 1000,
    games: 0,
    wins: 0,
    losses: 0
}
let Dealer = {
    name: "Dealer",
    handPts: 0,
    numHits: 0
}
let CardGame = {
    NumCards: 2,
    setHand : function() {
        let hand = [];
        for( let i=0; i<this.NumCards; i++){
            hand.push( deck.getCard( hand ) );
        }
        return hand;
    },
    addToHand : function(hand){
        hand.push( deck.getCard( hand ) );
        return hand;
    },
    // checkForAce: function(hand){
    //
    //     for (let i = 0; hand.length; i++){
    //         if (hand[i].img === 'AS.png' || hand[i].img === 'AH.png' ||
    //             hand[i].img === 'AD.png' || hand[i].img === 'AC.png'){
    //
    //         }
    //     }
    // },
    checkUserBust : function (hand){
        let totValue = 0;
        for (let i=0; i<hand.length; i++){
            totValue += hand[i].value
        }
        if (totValue > 21){
            return true;
        }
    },
    checkDealerBust : function (hand){
        let totValue = 0;
        for (let i=0; i<hand.length; i++){
            totValue += hand[i].value
        }
        if (totValue > 21){
            return true;
        }
    },
    checkInitWin : function (hand){
        let aceCheck = false;
        let jackCheck = false;
        for (let i=0; i<hand.length; i++){
            if (hand[i].img === 'JS.png' || hand[i].img === 'JH.png' ||
                hand[i].img === 'JD.png' || hand[i].img === 'JC.png'){
                jackCheck = true;
            }
        }
        for (let i=0; i<hand.length; i++){
            if (hand[i].img === 'AS.png' || hand[i].img === 'AH.png' ||
                hand[i].img === 'AD.png' || hand[i].img === 'AC.png'){
                aceCheck = true;
            }
        }
        if (aceCheck && jackCheck){
            return true;
        } else{
            return false;
        }
    },
    checkBlackJack: function (hand){
        let totValue = 0;
        for (let i=0; i<hand.length; i++){
            totValue += hand[i].value
        }
        if (totValue === 21){
            return true;
        }
    },
    comparePoints: function (uPts, dPts){
        let winPts = 21;
        let userDiff = 0;
        let dealerDiff = 0;
        userDiff = winPts - uPts;
        dealerDiff = winPts - dPts;
        if(dealerDiff < userDiff){
            return true;
        }
        return false;
    },
    checkTie: function (uPts, dPts){
        if (uPts == dPts){
            return true;
        }
        return false;
    }
}
let UI  = {
    setBet : function( betId, betDisId){
        let msg = "";
        let gotError = false;
        User.bet = parseInt(document.getElementById( betId ).value);
        if ( User.bet > User.balance || User.bet <= 0 || isNaN( User.bet/2 ) || User.bet == undefined || User.bet == null ){
            msg = `Illegal Bet: ${User.bet}`;
            gotError = true;
        } else {
            msg = `Bet: ${User.bet} Click Hit or Stick to Continue`;
        }
        document.getElementById( betDisId ).innerHTML = msg;
        return gotError;
    },
    displayUserHand : function ( hand, id ) {
        let resObj = document.getElementById( id  );
        let oStr = "";
        for ( let i=0; i<hand.length; i++ ){
            let cImg = hand[i].img;
            oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
        }
        resObj.innerHTML = oStr;
        document.getElementById("uCardLabel").style.display = "";
        let totHandVal = 0;
        for ( let i=0; i<hand.length; i++ ){
            totHandVal += hand[i].value;
        }
        User.handPts = totHandVal;
    },
    displayDealerHand : function ( hand, id ) {
        let resObj = document.getElementById( id  );
        let oStr = "";
        let hiddenCard = secretCard;
        for ( let i=1; i<hand.length; i++ ){
            let cImg = hand[i].img;
            oStr += `<img class='cardImg' src='imgs/${hiddenCard}'  alt='Face down dealer card' />`;
            oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
        }
        resObj.innerHTML = oStr;
        document.getElementById("dCardLabel").style.display = "";
    },
    displayFullDealHand : function (hand, id){
        let resObj = document.getElementById( id  );
        let oStr = "";
        for ( let i=0; i<hand.length; i++ ){
            let cImg = hand[i].img;
            oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
        }
        resObj.innerHTML = oStr;
        document.getElementById("dCardLabel").style.display = "";
        let totHandVal = 0;
        for ( let i=0; i<hand.length; i++ ){
            totHandVal += hand[i].value;
        }
        Dealer.handPts = totHandVal;
    },
    displayUserBust: function(hand, id){
        document.getElementById("bust").style.display = "";
        document.getElementById("userButtons").style.display = "none";
        document.getElementById("dealerWin").style.display = "";
        this.displayFullDealHand(hand, id);
    },
    displayDealerBust: function(){
        document.getElementById("dBust").style.display = "";
        document.getElementById("dealerButton").style.display = "none";
        document.getElementById("userWin").style.display = "";
        document.getElementById("userButtons").style.display = "none";

    },
    displayUserWin: function(){
        document.getElementById("dealerLoss").style.display = "";
        document.getElementById("userWin").style.display = "";
        document.getElementById("userButtons").style.display = "none";
        document.getElementById("dealerButton").style.display = "none";
    },
    displayDealerWin: function(){
        document.getElementById("userLoss").style.display = "";
        document.getElementById("dealerWin").style.display = "";
        document.getElementById("userButtons").style.display = "none";
        document.getElementById("dealerButton").style.display = "none";
    },
    resetBoard: function (user, dealer, deck){
        document.getElementById("bust").style.display = "none";
        document.getElementById("dBust").style.display = "none";
        document.getElementById("userButtons").style.display = "none";
        document.getElementById("dealerWin").style.display = "none";
        document.getElementById("userWin").style.display = "none";
        document.getElementById("userLoss").style.display = "none";
        document.getElementById("dealerLoss").style.display = "none";
        document.getElementById("userBlackJack").style.display = "none";
        document.getElementById("dealerBlackJack").style.display = "none";
        dealer.handPts = 0;
        dealer.numHits = 0;
        user.handPts = 0;
        user.numHits = 0;
        deck.reshuffle();
    },
    displayUserBlackJack : function (hand, id){
        document.getElementById("dealerLoss").style.display = "";
        document.getElementById("userWin").style.display = "";
        document.getElementById("userButtons").style.display = "none";
        document.getElementById("dealerButton").style.display = "none";
        document.getElementById("userBlackJack").style.display = "inline";
        this.displayFullDealHand(hand, id);
    },
    displayDealerBlackJack : function (hand, id){
        document.getElementById("userLoss").style.display = "";
        document.getElementById("dealerWin").style.display = "";
        document.getElementById("userButtons").style.display = "none";
        document.getElementById("dealerButton").style.display = "none";
        document.getElementById("dealerBlackJack").style.display = "inline";
        this.displayFullDealHand(hand, id);
    }
}
function updatePlayerTable() {
    let oStr = "<table id='table1' border='1px solid black' style='background-color: white'>"
    oStr += "<tr><th> Player </th><th>Hand Pts</th><th> Num Hits </th></tr>"
    oStr += `<tr><td> ${User.name} </td><td> ${User.handPts} </td><td>${User.numHits}</td></tr>`;
    oStr += `<tr><td> ${Dealer.name} </td><td> ${Dealer.handPts} </td><td>${Dealer.numHits}</td></tr>`;
    oStr += "</table>";
    document.getElementById("pTables").innerHTML = oStr;
    document.getElementById("betMsg").innerHTML = `Bet: ${User.bet} Click Hit or Stick to Continue`;
}
function updateOverallTable(){
    let oStr = "<table id='table2' border='1px solid black' style='background-color: white'>"
    oStr += "<tr><th> Balance </th><th>Bet</th><th>Games</th><th>Wins</th><th>Lost</th></tr>"
    oStr += `<tr><td> ${User.balance} </td><td> ${User.bet} </td><td>${User.games}</td><td>${User.wins}</td><td>${User.losses}</td></tr>`;
    oStr += "</table>";
    document.getElementById("oTables").innerHTML = oStr;
    document.getElementById("oStat").style.display = 'block';
}
function startGame(){
    document.getElementById("betMsg").style.display = "block";
    betWin = 0;
    if (User.balance < 0){
        User.balance = 0;
    }
    if (User.balance === 0){
        User.balance = 1000;
    }
    updatePlayerTable();
    updateOverallTable();
    UI.resetBoard(User,Dealer, deck);
    User.hand = [];
    Dealer.hand = [];
    let gotError = UI.setBet("bet", "betMsg");
    if (!gotError){
        betWin = (User.bet * 2);
        document.getElementById("betStarter").style.display = "none";
        document.getElementById("placeBetTxt").style.display = "none";
        document.getElementById("userButtons").style.display = "inline";
        User.hand = CardGame.setHand();
        Dealer.hand = CardGame.setHand();
        UI.displayUserHand( User.hand, "uCards" );
        UI.displayDealerHand(Dealer.hand, "dCards");
        User.balance = (User.balance - User.bet);
        updatePlayerTable();
        updateOverallTable();
        if(CardGame.checkInitWin(User.hand)){
            UI.displayUserBlackJack(Dealer.hand, "dCards");
            User.balance = (User.balance + (User.bet * 3));
            User.wins++;
            User.games++;
            document.getElementById("betStarter").style.display = "";
        }else if (CardGame.checkInitWin(Dealer.hand)){
            UI.displayDealerBlackJack(Dealer.hand, "dCards");
            User.losses++;
            User.games++;
            document.getElementById("betStarter").style.display = "";
        }else if(CardGame.checkBlackJack(User.hand)) {
            document.getElementById("userButtons").style.display = "none";
            document.getElementById("dealerButton").style.display = "inline";
            updatePlayerTable();
        }else {
            if(CardGame.checkDealerBust(Dealer.hand)){
                User.balance = (User.balance + betWin);
                UI.displayDealerBust();
                User.wins++;
                User.games++;
                updatePlayerTable();
                document.getElementById("betStarter").style.display = "";

            }else if(CardGame.checkUserBust(User.hand)){
                UI.displayUserBust(Dealer.hand, "dCards");
                User.losses++;
                User.games++;
                updatePlayerTable();
                document.getElementById("betStarter").style.display = "";
            }
        }
    }
}
function hitAction(){
    User.numHits++;
    User.hand = CardGame.addToHand(User.hand);
    UI.displayUserHand( User.hand, "uCards" );
    updatePlayerTable();
    if(CardGame.checkBlackJack(User.hand)){
        document.getElementById("userButtons").style.display = "none";
        document.getElementById("dealerButton").style.display = "inline";
        updatePlayerTable();
    }
    if(CardGame.checkUserBust(User.hand)){
        UI.displayUserBust(Dealer.hand, "dCards");
        User.losses++;
        User.games++;
        updatePlayerTable();
        document.getElementById("betStarter").style.display = "";
    }
}
function stickAction(){
    document.getElementById("userButtons").style.display = "none";
    document.getElementById("betMsg").style.display = "none";
    document.getElementById("dealerButton").style.display = "inline";
    UI.displayFullDealHand(Dealer.hand, "dCards");
    updatePlayerTable();
    if(CardGame.comparePoints(User.handPts, Dealer.handPts)){
        UI.displayDealerWin();
        User.losses++;
        User.games++;
        document.getElementById("betStarter").style.display = "";
    }
}
function dealerPlay() {
    if (Dealer.handPts < 17) {
        Dealer.numHits++;
        Dealer.hand = CardGame.addToHand(Dealer.hand);
        UI.displayFullDealHand(Dealer.hand, "dCards");
        updatePlayerTable();
        if (CardGame.checkDealerBust(Dealer.hand)){
            User.balance = User.balance + betWin;
            UI.displayDealerBust();
            User.wins++;
            User.games++;
            document.getElementById("betStarter").style.display = "";
        } else {
            if (CardGame.comparePoints(User.handPts, Dealer.handPts)) {
                User.games++;
                User.losses++;
                UI.displayDealerWin();
                document.getElementById("betStarter").style.display = "";
            }
        }
    }
    else{
        if (CardGame.checkTie(User.handPts, Dealer.handPts)){
            User.games++;
            User.losses++;
            UI.displayDealerWin();
            document.getElementById("betStarter").style.display = "";
        } else if(CardGame.comparePoints()){
            User.games++;
            User.losses++;
            UI.displayDealerWin();
            document.getElementById("betStarter").style.display = "";
        } else{
            UI.displayUserWin();
            User.balance = User.balance + betWin;
            User.wins++;
            User.games++;
            document.getElementById("betStarter").style.display = "";
        }

    }
}
function showStartTables(){
    updatePlayerTable();
    updateOverallTable();
    document.getElementById("betMsg").innerHTML = "Enter bet to start";
}



