let coins = Number(localStorage.getItem('coins')) || 0;

let miningEnd = Number(localStorage.getItem('miningEnd')) || 0;
let boxEnd = Number(localStorage.getItem('boxEnd')) || 0;
let dailyEnd = Number(localStorage.getItem('dailyEnd')) || 0;

const coinsEl=document.getElementById('coins');
coinsEl.innerText=coins;

function save(){
localStorage.setItem('coins',coins);
coinsEl.innerText=coins;
}

document.getElementById('mineBtn').onclick=()=>{
if(Date.now()<miningEnd){
alert('Mining running');
return;
}
miningEnd=Date.now()+24*60*60*1000;
localStorage.setItem('miningEnd',miningEnd);
};

document.getElementById('boxBtn').onclick=()=>{
if(Date.now()<boxEnd){
alert('Mystery Box locked');
return;
}
coins+=50;
save();
boxEnd=Date.now()+60*60*1000;
localStorage.setItem('boxEnd',boxEnd);
alert('🎁 +50 Coins');
};

document.getElementById('dailyBtn').onclick=()=>{
if(Date.now()<dailyEnd){
alert('Daily already claimed');
return;
}
coins+=500;
save();
dailyEnd=Date.now()+24*60*60*1000;
localStorage.setItem('dailyEnd',dailyEnd);
alert('🎁 +500 Coins');
};

function format(t){
let s=Math.floor(t/1000);
let h=Math.floor(s/3600);
let m=Math.floor((s%3600)/60);
let sec=s%60;
return h+'h '+m+'m '+sec+'s';
}

setInterval(()=>{
let now=Date.now();

document.getElementById('miningTimer').innerText=
now<miningEnd?format(miningEnd-now):'✅ Ready';

document.getElementById('boxTimer').innerText=
now<boxEnd?format(boxEnd-now):'📦 Ready';

document.getElementById('dailyTimer').innerText=
now<dailyEnd?format(dailyEnd-now):'🎁 Ready';

},1000);

function invite(){
alert('Invite system coming with Telegram bot');
}

function leaderboard(){
alert('Leaderboard coming with database');
}

function profile(){
alert('Profile Coins: '+coins);
}
