// Şifreli giriş: Şifreyi Şevval gerçek hayatta Furkan'dan alacak.
const passwordGate=document.querySelector('#passwordGate');
const passwordForm=document.querySelector('#passwordForm');
const passwordInput=document.querySelector('#passwordInput');
const passwordMessage=document.querySelector('#passwordMessage');
const passwordLock=document.querySelector('#passwordLock');
const passwordSuccess=document.querySelector('#passwordSuccess');
const passwordEye=document.querySelector('#passwordEye');
const APP_PASSWORD='2808';

passwordEye?.addEventListener('click',()=>{
 const show=passwordInput.type==='password';
 passwordInput.type=show?'text':'password';
 passwordEye.setAttribute('aria-label',show?'Şifreyi gizle':'Şifreyi göster');
 passwordEye.textContent=show?'◎':'◉';
 passwordInput.focus();
});

passwordInput?.addEventListener('input',()=>{
 passwordInput.value=passwordInput.value.replace(/\D/g,'').slice(0,4);
 passwordInput.classList.remove('is-error');
 passwordMessage.textContent='';
});

passwordForm?.addEventListener('submit',(event)=>{
 event.preventDefault();
 if(passwordInput.value!==APP_PASSWORD){
  navigator.vibrate?.([45,35,45]);
  passwordInput.classList.remove('is-error');
  void passwordInput.offsetWidth;
  passwordInput.classList.add('is-error');
  passwordMessage.textContent='Şifre doğru değil. Benden almayı unutmuş olabilir misin? 💙';
  passwordInput.select();
  return;
 }
 navigator.vibrate?.([40,45,80]);
 passwordInput.blur();
 passwordLock?.classList.add('unlocked');
 passwordMessage.textContent='';
 passwordGate?.classList.add('success');
 passwordSuccess?.classList.add('show');
 passwordSuccess?.setAttribute('aria-hidden','false');
 setTimeout(()=>{
  passwordGate?.classList.add('is-leaving');
  document.body.classList.remove('password-locked');
  setTimeout(()=>passwordGate?.remove(),850);
 },1900);
});

setTimeout(()=>passwordInput?.focus(),700);

const gate=document.querySelector('#gate'),app=document.querySelector('#app'),nav=document.querySelector('#bottomNav');
const audio=document.querySelector('#audio');
const openBtn=document.querySelector('#openSurprise');

openBtn.addEventListener('click',async()=>{
 navigator.vibrate?.(35);
 try{
  // Açılışta Adele - Lovesong baştan ve kesintisiz çalar.
  const lovesong=document.querySelector('#sleepMemorySong');
  if(lovesong){
   lovesong.volume=.68;
   lovesong.loop=true;
   lovesong.currentTime=0;
   await lovesong.play();
  }
 }catch(err){console.warn('Müzik başlatılamadı:',err)}
 gate.classList.add('hide');app.classList.add('show');app.setAttribute('aria-hidden','false');nav.classList.add('show');setTimeout(()=>window.scrollTo(0,0),300)
});
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();document.getElementById(b.dataset.go)?.scrollIntoView({behavior:'smooth'})}));
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const letterScenes=[
 {html:'<span class="soft">Yavrum...</span><br><br>Bugün senin günün. 🌸<br><br>Ve ben bu günü sıradan bir “İyi ki doğdun.” mesajıyla geçirmek istemedim.<br><br><strong>Çünkü sen, benim için sıradan biri değilsin.</strong>'},
 {html:'<strong class="gold">İyi ki tanışmışız...</strong><br><br>Bugün senin doğum gününü ikinci kez kutluyorum.<br><br>Düşündükçe hâlâ aynı şeyi söylüyorum:<br><br><strong>İyi ki hayatıma girmişsin.</strong>'},
 {html:'Hayatıma öyle güzel şeyler kattın ki...<br><br>Farkında bile olmadan hislerimi değiştirdin.<br><br><strong class="gold">Bana aşkın gerçekten ne olduğunu hissettirdin.</strong><br><br>Seni tanımadan önce ben nasıldım, ne yapıyordum... İnan bana artık hatırlamıyorum bile.'},
 {html:'Ben seni...<br><br>Hiçbir beklenti olmadan,<br>hiçbir çıkar gözetmeden,<br><strong>tamamen saf bir şekilde sevdim.</strong><br><br>Ve hâlâ da aynı şekilde sevmeye devam ediyorum.'},
 {html:'En ilginç yanı da şu...<br><br><strong class="gold">Sen hiçbir şey yapmasan bile beni etkiliyorsun.</strong><br><br>Bir gülüşün...<br>Bir mesajın...<br>Bir fotoğrafın...<br><br>Bazen sadece varlığın bile yetiyor.'},
 {html:'Hayata bakış açımı değiştirdin.<br><br>Dünyaya farklı bakmayı öğrettin.<br><br>Ve her geçen gün...<br><br><strong>Güzelliğine güzellik katarak büyümeye devam ediyorsun.</strong>'},
 {html:'Seninle konuşabilen, seni tanıyabilen herkes gerçekten çok şanslı.<br><br>Ben ise o şansı yaşayabilmiş biri olduğum için kendimi çok mutlu hissediyorum.<br><br><strong class="gold">Sen, hayatımın en özel insanısın.</strong>'},
 {html:'Artık günlerim sanki hep sen varmışsın gibi geçiyor.<br><br>Sen yanımdaymışsın gibi...<br>Seninle konuşuyormuşum gibi...<br><br>Belki tuhaf geliyor ama hissettirdiğin şey tam olarak bu.'},
 {html:'Bu yüzden sana sıradan bir doğum günü kutlaması yapmak istemedim.<br><br>Yanında olabilseydim, inan bana çok daha güzelini yapardım.<br><br>Ama mesafeler izin vermeyince ben de sana kalbimden geçenleri böyle ulaştırmak istedim.'},
 {html:'Yaklaşık iki aydır “Sürprizin ne?” diye soruyordun.<br><br><strong class="gold">İşte sana anlatmadığım sürpriz tam olarak buydu. ❤️</strong><br><br>Aslında daha yeni başlıyoruz. 💙<br><br>Çünkü bundan sonra seni bekleyen daha birçok küçük sürpriz var.<br><br>Umarım her birinde yüzünde ayrı bir gülümseme oluşur.<br><br>Hazırsan devam edelim... 💙'},
 {html:'Canımın içi...<br><br><strong>18 yaşın kutlu olsun. 🎂✨</strong><br><br>Önünde upuzun bir hayat var. İstediğin üniversite bu sene olmadı diye sakın moralini bozma.<br><br>Sana gerçekten inanıyorum. Eninde sonunda hayalini kurduğun üniversiteyi kazanacağına eminim.'},
 {html:'Dilerim ki hayatın boyunca huzurun eksik olmasın.<br><br>Mutluluğun hiç bitmesin.<br>Yüzündeki o güzel gülümseme hep seninle kalsın.<br><br>Ve dilediğin her şey bir gün tek tek gerçek olsun.'},
 {html:'Ve son olarak...<br><br><strong class="gold big-line">İyi ki doğdun.</strong><br><strong class="gold big-line">İyi ki varsın.</strong><br><strong class="gold big-line">İyi ki hayatımdasın.</strong><br><br><strong class="love-line">Seni çok ama çok seviyorum. 💙</strong>'}
];
let letterIndex=0,typeTimer=null,isTyping=false,letterTransitioning=false,letterFinaleStarted=false;
const intro=document.querySelector('#letterIntro'),reader=document.querySelector('#letterReader'),finaleLetter=document.querySelector('#letterFinale');
const cakeNote=document.querySelector('#cakeRevealNote'),cakeStage=document.querySelector('#cakeStage'),blowCandles=document.querySelector('#blowCandles'),numberCandles=document.querySelector('#numberCandles'),cakeWish=document.querySelector('#cakeWish'),wishPrompt=document.querySelector('#wishPrompt'),lilyRain=document.querySelector('#lilyRain'),secretEnvelopeWrap=document.querySelector('#secretEnvelopeWrap'),secretEnvelope=document.querySelector('#secretEnvelope'),secretNote=document.querySelector('#secretNote'),cakeCutTransition=document.querySelector('#cakeCutTransition'),cutCake=document.querySelector('#cutCake'),cakeFrame=document.querySelector('#cakeFrame'),plushSurprise=document.querySelector('#plushSurprise'),plushGift=document.querySelector('#plushGift'),plushGiftStage=document.querySelector('#plushGiftStage'),plushReveal=document.querySelector('#plushReveal'),plushNote=document.querySelector('#plushNote'),birthdayTeddy=document.querySelector('#birthdayTeddy'),birthdayDuck=document.querySelector('#birthdayDuck'),plushPair=document.querySelector('#plushPair'),plushHugBtn=document.querySelector('#plushHugBtn'),photoGiftStage=document.querySelector('#photoGiftStage'),photoGift=document.querySelector('#photoGift'),plushPhotoReveal=document.querySelector('#plushPhotoReveal'),plushPhotoClose=document.querySelector('#plushPhotoClose');
const typed=document.querySelector('#typedMessage'),nextLetter=document.querySelector('#nextLetter'),progress=document.querySelector('#letterProgress'),replay=document.querySelector('#replayMessage'),voiceLetter=document.querySelector('#voiceLetter'),voicePermission=document.querySelector('#voicePermission'),acceptVoice=document.querySelector('#acceptVoice'),declineVoice=document.querySelector('#declineVoice');
const letterPhoto=document.querySelector('#letterPhoto'),letterPhotoImg=document.querySelector('#letterPhotoImg'),letterPhotoNote=document.querySelector('#letterPhotoNote');
function safeElementAnimate(el,keyframes,options){if(!el)return null;try{if(typeof el.animate==='function')return el.animate(keyframes,options)}catch(err){console.warn('Geçiş animasyonu atlandı:',err)}return null}
function stripHtml(html){const d=document.createElement('div');d.innerHTML=html;return d.textContent||''}
let letterSpeech=null,letterSpeechPaused=false,voicePromptShown=false;
let voiceMusicWasPlaying=false,voiceLovesongWasPlaying=false,voiceMusicSuspended=false;
const furkanVoiceMessage=document.querySelector('#furkanVoiceMessage');
const furkanVoiceMessageContinue=document.querySelector('#furkanVoiceMessageContinue');
const voicePlaybackStatus=document.querySelector('#voicePlaybackStatus');
const voiceProgressFill=document.querySelector('#voiceProgressFill');
const voiceCurrentTime=document.querySelector('#voiceCurrentTime');
const voiceDuration=document.querySelector('#voiceDuration');
const voiceSpeedButtons=[...document.querySelectorAll('[data-voice-speed]')];
const voiceSkipTo70=document.querySelector('#voiceSkipTo70');
let voicePlaybackRate=1;
function formatVoiceTime(seconds){
 if(!Number.isFinite(seconds))return '0:00';
 const mins=Math.floor(seconds/60),secs=Math.floor(seconds%60);
 return `${mins}:${String(secs).padStart(2,'0')}`;
}
function updateVoiceButton(state='idle'){
 if(!voiceLetter)return;
 voiceLetter.classList.toggle('is-speaking',state==='speaking'||state==='paused');
 voiceLetter.setAttribute('aria-pressed',state==='speaking'||state==='paused'?'true':'false');
 if(state==='speaking')voiceLetter.innerHTML='<span aria-hidden="true">⏸</span> Sesimi Duraklat';
 else if(state==='paused')voiceLetter.innerHTML='<span aria-hidden="true">▶</span> Dinlemeye Devam Et';
 else if(state==='ended')voiceLetter.innerHTML='<span aria-hidden="true">↻</span> Sesimi Baştan Dinle';
 else voiceLetter.innerHTML='<span aria-hidden="true">▶</span> Sesimle Dinle';
}
function lowerLetterMusic(){
 if(voiceMusicSuspended)return;
 const lovesong=document.querySelector('#sleepMemorySong');
 voiceMusicWasPlaying=Boolean(audio&&!audio.paused);
 voiceLovesongWasPlaying=Boolean(lovesong&&!lovesong.paused);
 voiceMusicSuspended=true;
 audio?.pause();
 lovesong?.pause();
}
function restoreLetterMusic(){
 if(!voiceMusicSuspended)return;
 const lovesong=document.querySelector('#sleepMemorySong');
 const shouldResumeMain=voiceMusicWasPlaying;
 const shouldResumeLovesong=voiceLovesongWasPlaying;
 voiceMusicWasPlaying=false;
 voiceLovesongWasPlaying=false;
 voiceMusicSuspended=false;
 if(shouldResumeMain&&audio)audio.play().catch(()=>{});
 if(shouldResumeLovesong&&lovesong)lovesong.play().catch(()=>{});
}
function stopLetterSpeech(reset=true){
 [furkanVoiceMessage,furkanVoiceMessageContinue].forEach(message=>{
  if(!message)return;
  message.pause();
  if(reset){try{message.currentTime=0}catch(e){}}
 });
 letterSpeech=null;letterSpeechPaused=false;
 if(voicePlaybackStatus)voicePlaybackStatus.hidden=true;
 updateVoiceButton('idle');restoreLetterMusic();
}
async function speakBirthdayLetter(){
 if(!furkanVoiceMessage){alert('Ses kaydı bulunamadı.');return}
 try{
  lowerLetterMusic();
  let message=letterSpeech&&letterSpeechPaused?letterSpeech:furkanVoiceMessage;
  if(message===furkanVoiceMessage&&(furkanVoiceMessage.ended||furkanVoiceMessage.currentTime>=furkanVoiceMessage.duration-.15)){
   furkanVoiceMessage.currentTime=0;
   if(furkanVoiceMessageContinue)furkanVoiceMessageContinue.currentTime=0;
  }
  if(message===furkanVoiceMessageContinue&&(message.ended||message.currentTime>=message.duration-.15)){
   furkanVoiceMessage.currentTime=0;
   message=furkanVoiceMessage;
  }
  await message.play();
  letterSpeech=message;letterSpeechPaused=false;
  if(voicePlaybackStatus)voicePlaybackStatus.hidden=false;
  updateVoiceButton('speaking');
 }catch(err){
  restoreLetterMusic();updateVoiceButton('idle');
  alert('Ses kaydı başlatılamadı. Lütfen tekrar dokun.');
 }
}
function showVoicePermission(){
 if(!voicePermission||voicePromptShown)return;
 voicePromptShown=true;voicePermission.hidden=false;
 setTimeout(()=>acceptVoice?.focus(),60);
}
voiceLetter?.addEventListener('click',()=>{
 if(!furkanVoiceMessage)return;
 const activeMessage=letterSpeech&&!letterSpeech.ended?letterSpeech:furkanVoiceMessage;
 if(!activeMessage.paused){
  activeMessage.pause();letterSpeechPaused=true;updateVoiceButton('paused');restoreLetterMusic();
 }else speakBirthdayLetter();
});
acceptVoice?.addEventListener('click',()=>{voicePermission.hidden=true;speakBirthdayLetter()});
declineVoice?.addEventListener('click',()=>{voicePermission.hidden=true;voiceLetter?.focus()});
voicePermission?.addEventListener('click',e=>{if(e.target===voicePermission){voicePermission.hidden=true;voiceLetter?.focus()}});
function updateCombinedVoiceDuration(){
 const duration=(furkanVoiceMessage?.duration||0)+(furkanVoiceMessageContinue?.duration||0);
 if(voiceDuration&&duration)voiceDuration.textContent=formatVoiceTime(duration);
}
function updateCombinedVoiceProgress(message,isContinue=false){
 const firstDuration=furkanVoiceMessage?.duration||0;
 const secondDuration=furkanVoiceMessageContinue?.duration||0;
 const duration=firstDuration+secondDuration;
 const current=(isContinue?firstDuration:0)+(message.currentTime||0);
 if(voiceCurrentTime)voiceCurrentTime.textContent=formatVoiceTime(current);
 if(voiceProgressFill)voiceProgressFill.style.width=(duration?current/duration*100:0)+'%';
}
function setVoicePlaybackRate(rate){
 voicePlaybackRate=rate;
 [furkanVoiceMessage,furkanVoiceMessageContinue].forEach(message=>{if(message)message.playbackRate=rate});
 voiceSpeedButtons.forEach(button=>button.classList.toggle('is-active',Number(button.dataset.voiceSpeed)===rate));
}
voiceSpeedButtons.forEach(button=>button.addEventListener('click',()=>setVoicePlaybackRate(Number(button.dataset.voiceSpeed)||1)));
voiceSkipTo70?.addEventListener('click',async()=>{
 if(!furkanVoiceMessage)return;
 try{
  if(furkanVoiceMessageContinue){
   furkanVoiceMessageContinue.pause();
   furkanVoiceMessageContinue.currentTime=0;
  }
  furkanVoiceMessage.currentTime=Math.min(70,Math.max(0,(furkanVoiceMessage.duration||70)-.1));
  furkanVoiceMessage.playbackRate=voicePlaybackRate;
  lowerLetterMusic();
  await furkanVoiceMessage.play();
  letterSpeech=furkanVoiceMessage;letterSpeechPaused=false;
  updateVoiceButton('speaking');
 }catch(err){
  restoreLetterMusic();
  alert('Ses 1:10 noktasından başlatılamadı. Lütfen tekrar dokun.');
 }
});
furkanVoiceMessage?.addEventListener('loadedmetadata',updateCombinedVoiceDuration);
furkanVoiceMessageContinue?.addEventListener('loadedmetadata',updateCombinedVoiceDuration);
furkanVoiceMessage?.addEventListener('timeupdate',()=>updateCombinedVoiceProgress(furkanVoiceMessage));
furkanVoiceMessageContinue?.addEventListener('timeupdate',()=>updateCombinedVoiceProgress(furkanVoiceMessageContinue,true));
furkanVoiceMessage?.addEventListener('play',()=>{lowerLetterMusic();if(voicePlaybackStatus)voicePlaybackStatus.hidden=false;updateVoiceButton('speaking')});
furkanVoiceMessage?.addEventListener('pause',()=>{if(!furkanVoiceMessage.ended&&furkanVoiceMessage.currentTime>0){letterSpeechPaused=true;updateVoiceButton('paused')}});
furkanVoiceMessage?.addEventListener('ended',async()=>{
 if(!furkanVoiceMessageContinue){
  letterSpeech=null;letterSpeechPaused=false;restoreLetterMusic();updateVoiceButton('ended');
  if(voiceProgressFill)voiceProgressFill.style.width='100%';
  return;
 }
 try{
  furkanVoiceMessageContinue.currentTime=0;
  letterSpeech=furkanVoiceMessageContinue;letterSpeechPaused=false;
  await furkanVoiceMessageContinue.play();
 }catch(err){
  letterSpeech=null;restoreLetterMusic();updateVoiceButton('ended');
  alert('İkinci ses kaydı başlatılamadı. Lütfen tekrar dokun.');
 }
});
furkanVoiceMessage?.addEventListener('error',()=>{restoreLetterMusic();updateVoiceButton('idle');alert('Ses kaydı yüklenemedi.')});
furkanVoiceMessageContinue?.addEventListener('play',()=>{lowerLetterMusic();if(voicePlaybackStatus)voicePlaybackStatus.hidden=false;updateVoiceButton('speaking')});
furkanVoiceMessageContinue?.addEventListener('pause',()=>{if(!furkanVoiceMessageContinue.ended&&furkanVoiceMessageContinue.currentTime>0){letterSpeechPaused=true;updateVoiceButton('paused')}});
furkanVoiceMessageContinue?.addEventListener('ended',()=>{letterSpeech=null;letterSpeechPaused=false;restoreLetterMusic();updateVoiceButton('ended');if(voiceProgressFill)voiceProgressFill.style.width='100%'});
furkanVoiceMessageContinue?.addEventListener('error',()=>{restoreLetterMusic();updateVoiceButton('idle');alert('İkinci ses kaydı yüklenemedi.')});
window.addEventListener('beforeunload',()=>stopLetterSpeech());
document.addEventListener('visibilitychange',()=>{
 if(!document.hidden)return;
 const activeMessage=[furkanVoiceMessage,furkanVoiceMessageContinue].find(message=>message&&!message.paused);
 if(activeMessage){activeMessage.pause();restoreLetterMusic()}
});

/* Sen Uykuya Dalarken */
const openBedtimeTale=document.querySelector('#openBedtimeTale');
const closeBedtimeTale=document.querySelector('#closeBedtimeTale');
const bedtimeWorld=document.querySelector('#bedtimeWorld');
const bedtimeSoundToggle=document.querySelector('#bedtimeSoundToggle');
const bedtimeWorldSnow=document.querySelector('#bedtimeWorldSnow');
let bedtimeAudioContext=null,bedtimeMaster=null,bedtimeNoise=null,bedtimeCrackleTimer=null,bedtimeSoundOn=false,bedtimeMusicWasPlaying=false;
function fillBedtimeSnow(){
 if(!bedtimeWorldSnow||bedtimeWorldSnow.children.length)return;
 for(let i=0;i<46;i++){
  const flake=document.createElement('i');
  const size=2+Math.random()*5;
  flake.style.left=Math.random()*100+'%';
  flake.style.width=size+'px';flake.style.height=size+'px';
  flake.style.opacity=.25+Math.random()*.7;
  flake.style.animationDuration=6+Math.random()*10+'s';
  flake.style.animationDelay=-Math.random()*14+'s';
  flake.style.setProperty('--drift',(-45+Math.random()*90)+'px');
  bedtimeWorldSnow.appendChild(flake);
 }
}
function makeBedtimeNoise(ctx){
 const buffer=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate),data=buffer.getChannelData(0);
 let last=0;
 for(let i=0;i<data.length;i++){const white=Math.random()*2-1;last=.985*last+.015*white;data[i]=last*.42+white*.018}
 return buffer;
}
function scheduleBedtimeCrackle(){
 if(!bedtimeSoundOn||!bedtimeAudioContext)return;
 const now=bedtimeAudioContext.currentTime,osc=bedtimeAudioContext.createOscillator(),gain=bedtimeAudioContext.createGain();
 osc.type='triangle';osc.frequency.setValueAtTime(90+Math.random()*130,now);osc.frequency.exponentialRampToValueAtTime(45,now+.05);
 gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.02+Math.random()*.025,now+.008);gain.gain.exponentialRampToValueAtTime(.0001,now+.07+Math.random()*.07);
 osc.connect(gain).connect(bedtimeMaster);osc.start(now);osc.stop(now+.18);
 bedtimeCrackleTimer=setTimeout(scheduleBedtimeCrackle,260+Math.random()*1050);
}
async function startBedtimeSound(){
 try{
  bedtimeAudioContext=bedtimeAudioContext||new(window.AudioContext||window.webkitAudioContext)();
  await bedtimeAudioContext.resume();
  bedtimeMaster=bedtimeAudioContext.createGain();bedtimeMaster.gain.value=.34;bedtimeMaster.connect(bedtimeAudioContext.destination);
  const filter=bedtimeAudioContext.createBiquadFilter();filter.type='bandpass';filter.frequency.value=390;filter.Q.value=.42;
  bedtimeNoise=bedtimeAudioContext.createBufferSource();bedtimeNoise.buffer=makeBedtimeNoise(bedtimeAudioContext);bedtimeNoise.loop=true;
  bedtimeNoise.connect(filter).connect(bedtimeMaster);bedtimeNoise.start();bedtimeSoundOn=true;scheduleBedtimeCrackle();
  bedtimeSoundToggle?.setAttribute('aria-pressed','true');
  if(bedtimeSoundToggle)bedtimeSoundToggle.innerHTML='<span aria-hidden="true">♩</span> Şömine sesi açık';
 }catch(e){bedtimeSoundOn=false}
}
function stopBedtimeSound(){
 bedtimeSoundOn=false;clearTimeout(bedtimeCrackleTimer);try{bedtimeNoise?.stop()}catch(e){}bedtimeNoise=null;
 bedtimeSoundToggle?.setAttribute('aria-pressed','false');
 if(bedtimeSoundToggle)bedtimeSoundToggle.innerHTML='<span aria-hidden="true">♩</span> Şömine sesini aç';
}
function openBedtimeWorld(keepMusicState=false){
 if(!bedtimeWorld)return;
 if(!keepMusicState){
  bedtimeMusicWasPlaying=audio&&!audio.paused;
  const masalSongAlreadyPlaying=audio&&!audio.paused&&decodeURI(audio.currentSrc||audio.src).includes('its-snowing-best-part.mp3');
  if(audio&&!masalSongAlreadyPlaying)audio.pause();
 }
 bedtimeWorld.classList.add('is-open');bedtimeWorld.setAttribute('aria-hidden','false');document.body.classList.add('bedtime-world-open');
 startBedtimeSound();startSleepMemorySong();setTimeout(()=>closeBedtimeTale?.focus(),400);
}
function closeBedtimeWorld(){
 if(!bedtimeWorld)return;
 stopBedtimeSound();bedtimeWorld.classList.remove('is-open');bedtimeWorld.setAttribute('aria-hidden','true');document.body.classList.remove('bedtime-world-open');
 window.YOGMusic?.resumeBeforeSleep?.();
 bedtimeMusicWasPlaying=false;openBedtimeTale?.focus();
}
openBedtimeTale?.addEventListener('click',()=>openSleepMemoryWorld(false));
closeBedtimeTale?.addEventListener('click',closeBedtimeWorld);
bedtimeSoundToggle?.addEventListener('click',()=>bedtimeSoundOn?stopBedtimeSound():startBedtimeSound());
bedtimeWorld?.addEventListener('click',e=>{if(e.target===bedtimeWorld)closeBedtimeWorld()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&bedtimeWorld?.classList.contains('is-open'))closeBedtimeWorld()});

/* Seni Uyuturken */
const continueToSleepMemory=document.querySelector('#continueToSleepMemory');
const backToBedtimeTale=document.querySelector('#backToBedtimeTale');
const closeSleepMemory=document.querySelector('#closeSleepMemory');
const sleepMemoryWorld=document.querySelector('#sleepMemoryWorld');
const sleepMemoryFrames=[...document.querySelectorAll('.sleep-memory-frame')];
const sleepMemoryAction=document.querySelector('#sleepMemoryAction');
const sleepMemoryStory=document.querySelector('#sleepMemoryStory');
const sleepMemoryDots=[...document.querySelectorAll('.sleep-memory-dots i')];
const sleepMemoryFinal=document.querySelector('#sleepMemoryFinal');
const sleepMemoryWhisper=document.querySelector('#sleepMemoryWhisper');
const sleepMemorySong=document.querySelector('#sleepMemorySong');
let sleepMemoryStep=0,sleepMemoryMusicWasPlaying=false,sleepLovesongWasPlaying=false;
const sleepMemoryTexts=[
 'Seni uyutmayı seviyordum. Uykun geldikçe sesinin değişmesi, konuşmalarının yavaşlaması falan çok tatlı geliyordu bana.',
 'Gözlerin kapanırken saçlarını usulca okşardım.',
 'Nefesin yavaşladıkça ben de seninle birlikte sessizleşirdim.',
 'Sonra alnından öper ve huzurla uyuduğunu görmek için yanında kalırdım.'
];
const sleepMemoryButtons=['Saçlarını Okşa','Gözlerini Kapat','Alnından Öp','Yanında Kal'];
const sleepMemoryWhispers=['“Uyu bakalım yavrum, ben buradayım.”','“Gözlerini kapat yavrum…”','“Uyuyana kadar gitmeyeceğim…”','“İyi geceler güzelim…”'];
const sleepMemoryFrameMap=[0,1,1,2];
function startSleepMemorySong(){
 const sceneSongAlreadyPlaying=audio&&!audio.paused&&decodeURI(audio.currentSrc||audio.src).includes('its-snowing-best-part.mp3');
 if(sceneSongAlreadyPlaying)return;
 sleepLovesongWasPlaying=Boolean(sleepMemorySong&&!sleepMemorySong.paused);
 sleepMemorySong?.pause();
 if(window.YOGMusic?.playSleepTrack)window.YOGMusic.playSleepTrack();
 else if(window.YOGMusic?.playTrack)window.YOGMusic.playTrack(0,0,.68);
 else if(audio){
  audio.src='assets/its-snowing-best-part.mp3';
  audio.load();audio.currentTime=0;audio.volume=.68;audio.play().catch(()=>{});
 }
}
function stopSleepMemorySong(){
 if(audio){audio.pause();audio.currentTime=0}
 if(sleepLovesongWasPlaying&&sleepMemorySong)sleepMemorySong.play().catch(()=>{});
 sleepLovesongWasPlaying=false;
}
function setSleepMemoryStep(step){
 sleepMemoryStep=Math.max(0,Math.min(step,3));
 sleepMemoryFrames.forEach((frame,index)=>frame.classList.toggle('is-active',index===sleepMemoryFrameMap[sleepMemoryStep]));
 sleepMemoryDots.forEach((dot,index)=>dot.classList.toggle('is-active',index===sleepMemoryStep));
 if(sleepMemoryStory)sleepMemoryStory.textContent=sleepMemoryTexts[sleepMemoryStep];
 if(sleepMemoryWhisper)sleepMemoryWhisper.textContent=sleepMemoryWhispers[sleepMemoryStep];
 if(sleepMemoryAction){sleepMemoryAction.textContent=sleepMemoryButtons[sleepMemoryStep];sleepMemoryAction.classList.toggle('is-complete',sleepMemoryStep===3)}
 sleepMemoryWorld?.classList.toggle('is-drowsy',sleepMemoryStep>=2);
}
function openSleepMemoryWorld(keepMusicState=false){
 if(!sleepMemoryWorld)return;
 if(!keepMusicState){sleepMemoryMusicWasPlaying=audio&&!audio.paused;if(audio)audio.pause()}
 if(sleepMemoryFinal)sleepMemoryFinal.hidden=true;
 if(sleepMemoryAction)sleepMemoryAction.disabled=false;
 sleepMemoryWorld.classList.remove('is-resting','is-drowsy');
 setSleepMemoryStep(0);sleepMemoryWorld.classList.add('is-open');sleepMemoryWorld.setAttribute('aria-hidden','false');document.body.classList.add('sleep-memory-active');
 startSleepMemorySong();
 setTimeout(()=>closeSleepMemory?.focus(),350);
}
function closeSleepMemoryWorld(){
 if(!sleepMemoryWorld)return;
 sleepMemoryWorld.classList.remove('is-open');sleepMemoryWorld.setAttribute('aria-hidden','true');document.body.classList.remove('sleep-memory-active');
 window.YOGMusic?.resumeBeforeSleep?.();
 sleepMemoryMusicWasPlaying=false;openBedtimeTale?.focus();
}
function continueFromBedtimeToSleep(){
 if(!bedtimeWorld||!sleepMemoryWorld)return;
 sleepMemoryMusicWasPlaying=bedtimeMusicWasPlaying;
 stopBedtimeSound();
 bedtimeWorld.classList.remove('is-open');bedtimeWorld.setAttribute('aria-hidden','true');document.body.classList.remove('bedtime-world-open');
 bedtimeMusicWasPlaying=false;
 openSleepMemoryWorld(true);
}
function returnFromSleepToBedtime(){
 if(!bedtimeWorld||!sleepMemoryWorld)return;
 bedtimeMusicWasPlaying=sleepMemoryMusicWasPlaying;
 sleepMemoryWorld.classList.remove('is-open');sleepMemoryWorld.setAttribute('aria-hidden','true');document.body.classList.remove('sleep-memory-active');
 sleepMemoryMusicWasPlaying=false;
 openBedtimeWorld(true);
}
sleepMemoryAction?.addEventListener('click',()=>{
 if(sleepMemoryStep<3){setSleepMemoryStep(sleepMemoryStep+1);return}
 sleepMemoryAction.textContent='Yanında Kalıyorum';sleepMemoryAction.disabled=true;
 sleepMemoryWorld?.classList.add('is-resting');
 if(sleepMemoryFinal)sleepMemoryFinal.hidden=false;
});
let sleepGestureStartY=null;
sleepMemoryWorld?.addEventListener('pointerdown',event=>{sleepGestureStartY=event.clientY});
sleepMemoryWorld?.addEventListener('pointerup',event=>{
 if(sleepGestureStartY===null)return;
 const distance=event.clientY-sleepGestureStartY;sleepGestureStartY=null;
 if(distance<55||sleepMemoryStep>=3)return;
 setSleepMemoryStep(sleepMemoryStep+1);
});
continueToSleepMemory?.addEventListener('click',continueFromBedtimeToSleep);
backToBedtimeTale?.addEventListener('click',returnFromSleepToBedtime);
closeSleepMemory?.addEventListener('click',closeSleepMemoryWorld);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&sleepMemoryWorld?.classList.contains('is-open'))closeSleepMemoryWorld()});
function showLetterScene(index){
 clearTimeout(typeTimer);
 isTyping=false;
 nextLetter.disabled=true;
 nextLetter.classList.remove('ready');
 progress.style.width=((index+1)/letterScenes.length*100)+'%';
 const scene=letterScenes[index];
 letterPhoto.hidden=true;
 letterPhoto.classList.remove('show');

 const parts=scene.html.split(/<br\s*\/?>\s*<br\s*\/?>/i).filter(Boolean);
 typed.innerHTML=parts.map((part,i)=>`<div class="message-paragraph" style="--delay:${i*170}ms">${part}</div>`).join('');
 typed.classList.remove('scene-enter');
 void typed.offsetWidth;
 typed.classList.add('scene-enter');

 const totalDelay=Math.max(650,parts.length*170+520);
 if(scene.photo){
  letterPhotoImg.src=scene.photo;
  letterPhotoNote.textContent=scene.note||'';
  letterPhoto.hidden=false;
  setTimeout(()=>letterPhoto.classList.add('show'),Math.max(420,totalDelay-180));
 }
 typeTimer=setTimeout(()=>{
  nextLetter.disabled=false;
  nextLetter.classList.add('ready');
  nextLetter.textContent=index===letterScenes.length-1?'Finale Geç':'Devam Et';
 },totalDelay);
}
function openBirthdayLetter(){
 clearTimeout(typeTimer);letterTransitioning=false;letterFinaleStarted=false;
 intro.hidden=true;finaleLetter.hidden=true;reader.hidden=false;letterIndex=0;
 document.querySelector('#birthdayLetter')?.classList.remove('finale-active');
 showLetterScene(letterIndex);
 document.querySelector('#birthdayLetter')?.classList.add('letter-open');
 setTimeout(showVoicePermission,900);
 if(audio&&!audio.dataset.beforeLetterVolume)audio.dataset.beforeLetterVolume=String(audio.volume||1);
 if(audio)audio.volume=Math.min(Number(audio.dataset.beforeLetterVolume||1),.38);
 cakeNote?.classList.remove('hide');cakeStage?.classList.remove('show');numberCandles?.classList.remove('blown');
 if(cakeWish)cakeWish.hidden=true;blowCandles?.classList.remove('done');
 if(wishPrompt){wishPrompt.textContent='';wishPrompt.classList.remove('complete')}
 if(secretEnvelopeWrap)secretEnvelopeWrap.hidden=true;secretEnvelope?.classList.remove('open');
 if(secretNote)secretNote.hidden=true;if(cakeCutTransition)cakeCutTransition.hidden=true;secretEnvelopeWrap?.classList.remove('note-open');cakeFrame?.classList.remove('cut');
 if(cutCake){cutCake.disabled=false;cutCake.textContent='🍰 İlk Dilimi Kes'}
if(plushSurprise)plushSurprise.hidden=true;if(plushGiftStage){plushGiftStage.hidden=false;plushGiftStage.style.display='';plushGiftStage.classList.remove('opening')}if(plushReveal){plushReveal.hidden=true;plushReveal.style.display='';plushReveal.classList.remove('hugging','pair-hugging','pair-hugged')}plushGift?.classList.remove('open');if(plushGift)delete plushGift.dataset.opening;plushHugBtn?.classList.remove('done');if(plushHugBtn){plushHugBtn.textContent='Sarıl';if(plushNote){plushNote.classList.remove('hug-message');plushNote.innerHTML='<p>Ben sana sarılamadığım zamanlarda...</p><strong>Bu küçük ruhumuz birbirine güzel hislerle sarılsın</strong>'};plushHugBtn.disabled=false}if(photoGiftStage){photoGiftStage.hidden=true;photoGiftStage.style.display=''}photoGift?.classList.remove('open');if(photoGift)delete photoGift.dataset.opening;if(plushPhotoReveal)plushPhotoReveal.hidden=true;if(lilyRain)lilyRain.innerHTML='';
}
document.querySelector('#openLetter')?.addEventListener('click',(event)=>{
 event.preventDefault();
 const button=event.currentTarget,envelope=document.querySelector('#letterEnvelope');
 if(button.disabled)return;
 button.disabled=true;button.textContent='Mektup açılıyor…';
 envelope?.classList.add('is-opening');
 navigator.vibrate?.([30,40,55]);
 setTimeout(openBirthdayLetter,1050);
});
nextLetter?.addEventListener('click',(event)=>{
 event.preventDefault();event.stopPropagation();
 if(isTyping||letterTransitioning||letterFinaleStarted)return;
 letterTransitioning=true;nextLetter.disabled=true;
 try{
  if(letterIndex<letterScenes.length-1){
   letterIndex++;
   safeElementAnimate(document.querySelector('#letterPage'),[{opacity:.2,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:420,easing:'ease-out'});
   showLetterScene(letterIndex);
   setTimeout(()=>{letterTransitioning=false},260);
  }else{
   stopLetterSpeech();letterFinaleStarted=true;reader.hidden=true;finaleLetter.hidden=false;
   document.querySelector('#birthdayLetter')?.classList.add('finale-active');
   if(audio)audio.volume=Number(audio.dataset.beforeLetterVolume||1);
   try{navigator.vibrate?.([40,40,70])}catch(e){}
   createPetalBurst();cakeNote?.classList.remove('hide');cakeStage?.classList.remove('show');
   setTimeout(()=>cakeNote?.classList.add('hide'),1800);
   setTimeout(()=>{cakeStage?.classList.add('show');typeCakeWish()},2450);
   requestAnimationFrame(()=>{try{finaleLetter.scrollIntoView({block:'start',behavior:'smooth'})}catch(e){finaleLetter.scrollIntoView()}});
  }
 }catch(err){
  console.error('Doğum günü mesajı geçiş hatası:',err);
  letterTransitioning=false;letterFinaleStarted=false;nextLetter.disabled=false;nextLetter.classList.add('ready');
 }
});

function typeCakeWish(){
 if(!wishPrompt)return;
 const text='Bir dilek tut...';let i=0;wishPrompt.textContent='';wishPrompt.classList.remove('complete');
 const timer=setInterval(()=>{wishPrompt.textContent=text.slice(0,++i);if(i>=text.length){clearInterval(timer);wishPrompt.classList.add('complete')}},95);
}
function playBirthdaySound(kind){
 try{
  const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;const ctx=new AC();const now=ctx.currentTime;
  if(kind==='blow'){
   const len=ctx.sampleRate*.85,buf=ctx.createBuffer(1,len,ctx.sampleRate),d=buf.getChannelData(0);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);
   const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();filter.type='bandpass';filter.frequency.setValueAtTime(720,now);filter.Q.value=.55;gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.13,now+.06);gain.gain.exponentialRampToValueAtTime(.0001,now+.85);src.buffer=buf;src.connect(filter).connect(gain).connect(ctx.destination);src.start(now);src.stop(now+.9);
  }else{
   [0,4,7,12].forEach((n,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type=i===3?'sine':'triangle';o.frequency.value=440*Math.pow(2,n/12);g.gain.setValueAtTime(.0001,now+i*.06);g.gain.exponentialRampToValueAtTime(.055,now+i*.06+.02);g.gain.exponentialRampToValueAtTime(.0001,now+.8+i*.06);o.connect(g).connect(ctx.destination);o.start(now+i*.06);o.stop(now+1.1)});
  }
  setTimeout(()=>ctx.close(),1500);
 }catch(e){}
}
function lilySvg(){
 return `<svg viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="lp" cx="52%" cy="57%" r="62%"><stop offset="0" stop-color="#fff0b6"/><stop offset=".38" stop-color="#fffaf0"/><stop offset="1" stop-color="#e8dfef"/></radialGradient></defs><g transform="translate(50 50)">${[0,60,120,180,240,300].map(a=>`<path d="M0 4 C-13 -8 -13 -35 0 -47 C13 -35 13 -8 0 4Z" fill="url(#lp)" stroke="#d7cada" stroke-width="1" transform="rotate(${a})"/>`).join('')}<circle r="8" fill="#f2cf68"/>${[0,72,144,216,288].map(a=>`<g transform="rotate(${a})"><path d="M0 -3 Q2 -20 1 -30" fill="none" stroke="#ead27c" stroke-width="2"/><ellipse cy="-32" rx="2.4" ry="4.5" fill="#b77742"/></g>`).join('')}</g></svg>`
}
function createLilyRain(){
 if(!lilyRain)return;lilyRain.innerHTML='';
 for(let i=0;i<30;i++){const f=document.createElement('span');f.className='lily-flower';f.innerHTML=lilySvg();f.style.left=(Math.random()*100)+'%';f.style.setProperty('--size',(28+Math.random()*40)+'px');f.style.setProperty('--duration',(4.8+Math.random()*3.8)+'s');f.style.setProperty('--delay',(Math.random()*1.15)+'s');f.style.setProperty('--drift',(-120+Math.random()*240)+'px');f.style.setProperty('--start-rot',(Math.random()*180)+'deg');f.style.setProperty('--end-rot',(420+Math.random()*420)+'deg');f.style.setProperty('--spin',(1.5+Math.random()*2.2)+'s');lilyRain.appendChild(f)}
 setTimeout(()=>{if(secretEnvelopeWrap){secretEnvelopeWrap.hidden=false;secretEnvelopeWrap.scrollIntoView({behavior:'smooth',block:'center'})}},2600);
 setTimeout(()=>{lilyRain.innerHTML=''},9200);
}
blowCandles?.addEventListener('click',()=>{
 if(numberCandles.classList.contains('blown'))return;
 const lovesong=document.querySelector('#sleepMemorySong');
 if(lovesong){lovesong.pause();lovesong.currentTime=0}
 playBirthdaySound('blow');
 window.YOGMusic?.cuePeak?.();
 numberCandles.classList.add('blown');blowCandles.classList.add('done');navigator.vibrate?.([60,50,120]);
 createLilyRain();
 setTimeout(()=>{cakeWish.hidden=false},900);
});
secretEnvelope?.addEventListener('click',()=>{
 if(secretEnvelope.classList.contains('open'))return;
 secretEnvelope.classList.add('open');secretEnvelopeWrap?.classList.add('note-open');
 playBirthdaySound('chime');navigator.vibrate?.(35);
 setTimeout(()=>{secretNote.hidden=false;secretNote.scrollIntoView({behavior:'smooth',block:'center'})},720);
 setTimeout(()=>{if(cakeCutTransition)cakeCutTransition.hidden=false},1550);
});
cutCake?.addEventListener('click',()=>{
 if(cakeFrame.classList.contains('cut') || cutCake.disabled)return;
 cutCake.disabled=true;
 cutCake.textContent='Dilim hazırlanıyor...';
 cakeFrame.classList.add('is-cut-focus');
 cakeFrame.scrollIntoView({behavior:'smooth',block:'center'});
 playBirthdaySound('chime');
 navigator.vibrate?.([35,40,70]);

 // Önce pastayı ekrana getir; ardından kesme animasyonunu görünür biçimde başlat.
 setTimeout(()=>{
  cakeFrame.classList.add('cut');
  cutCake.textContent='🍰 İlk dilim senin';
 },520);

 // Dilim ayrıldıktan sonra peluş sürprizini getir.
 setTimeout(()=>{
  cakeFrame.classList.remove('is-cut-focus');
  if(plushSurprise){
   plushSurprise.hidden=false;
   requestAnimationFrame(()=>plushSurprise.scrollIntoView({behavior:'smooth',block:'center'}));
  }
 },2350);
});

function openPlushGift(event){
 event?.preventDefault?.();
 event?.stopPropagation?.();
 if(!plushGift || plushGift.dataset.opening==='1') return;
 plushGift.dataset.opening='1';
 plushGift.classList.add('open');
 plushGiftStage?.classList.add('opening');
 playBirthdaySound('chime');
 navigator.vibrate?.([30,40,60]);

 // Mobil tarayıcılarda animasyon sonu olayı kaçarsa bile sahne kesin açılır.
 window.setTimeout(()=>{
  if(plushGiftStage){
   plushGiftStage.hidden=true;
   plushGiftStage.style.display='none';
  }
  if(plushReveal){
   plushReveal.hidden=false;
   plushReveal.style.display='flex';
   plushReveal.classList.add('revealed');
   requestAnimationFrame(()=>plushReveal.scrollIntoView({behavior:'smooth',block:'center'}));
  }
 },520);
}
window.openPlushGift=openPlushGift;
plushGift?.addEventListener('click',openPlushGift);

function makeHugHearts(){
 if(!plushReveal) return;
 for(let i=0;i<10;i++){
  const heart=document.createElement('span');
  heart.className='plush-hug-heart';
  heart.textContent=i%3===0?'💙':'🤍';
  heart.style.setProperty('--x',`${-90+Math.random()*180}px`);
  heart.style.setProperty('--delay',`${Math.random()*.25}s`);
  plushReveal.appendChild(heart);
  setTimeout(()=>heart.remove(),1800);
 }
}
function hugTeddy(event){
 event?.preventDefault?.();
 event?.stopPropagation?.();
 if(!plushReveal || !birthdayTeddy || !birthdayDuck)return;
 plushReveal.classList.remove('hugging','pair-hugging','pair-hugged');
 birthdayTeddy.classList.remove('is-hugging');
 void plushReveal.offsetWidth;
 plushReveal.classList.add('pair-hugging');
 makeHugHearts();
 if(plushHugBtn){
  plushHugBtn.classList.remove('done');
  void plushHugBtn.offsetWidth;
  plushHugBtn.classList.add('done');
  plushHugBtn.textContent='🤍 Birlikte Sarıldılar';
  plushHugBtn.disabled=true;
 }
 navigator.vibrate?.([35,45,35]);
 setTimeout(()=>{
  plushReveal.classList.remove('pair-hugging');
  plushReveal.classList.add('pair-hugged');
  if(plushHugBtn){
   plushHugBtn.textContent='🤍 Sımsıkı Sarıldılar';
   plushHugBtn.disabled=true;
  }
  if(plushNote){
   plushNote.classList.add('hug-message');
   plushNote.innerHTML='<strong>Bu küçük ikiliyi sana emanet ediyorum. 🤍</strong>';
  }
  if(photoGiftStage){
   photoGiftStage.hidden=false;
   photoGiftStage.style.display='flex';
   requestAnimationFrame(()=>photoGiftStage.scrollIntoView({behavior:'smooth',block:'center'}));
  }
 },2100);
}
window.hugTeddy=hugTeddy;
plushHugBtn?.addEventListener('click',hugTeddy);


function openPhotoGift(event){
 event?.preventDefault?.();
 event?.stopPropagation?.();
 if(!photoGift || photoGift.dataset.opening==='1')return;
 photoGift.dataset.opening='1';
 photoGift.classList.add('open');
 playBirthdaySound('chime');
 navigator.vibrate?.([30,40,60]);
 setTimeout(()=>{
  if(plushPhotoReveal){
   plushPhotoReveal.hidden=false;
   document.body.style.overflow='hidden';
  }
  photoGift.classList.remove('open');
  delete photoGift.dataset.opening;
 },620);
}
function closePlushPhoto(){
 if(plushPhotoReveal)plushPhotoReveal.hidden=true;
 document.body.style.overflow='';
}
photoGift?.addEventListener('click',openPhotoGift);
plushPhotoClose?.addEventListener('click',closePlushPhoto);
plushPhotoReveal?.addEventListener('click',e=>{if(e.target===plushPhotoReveal)closePlushPhoto()});
document.addEventListener('keydown',e=>{if(e.key==='Escape' && plushPhotoReveal && !plushPhotoReveal.hidden)closePlushPhoto()});

function createPetalBurst(){const box=document.querySelector('.message-petals');for(let i=0;i<28;i++){const p=document.createElement('i');p.style.left=Math.random()*100+'%';p.style.animationDelay=Math.random()*1.3+'s';p.style.animationDuration=(3+Math.random()*3)+'s';box.appendChild(p);setTimeout(()=>p.remove(),7000)}}
document.querySelector('#restartLetter').onclick=openBirthdayLetter;
replay.onclick=openBirthdayLetter;

const photoModal=document.querySelector('#photoModal'),modalPhoto=document.querySelector('#modalPhoto'),photoNote=document.querySelector('#photoNote');
function openPhoto(el){modalPhoto.src=el.dataset.photo;photoNote.textContent=el.dataset.note||'';photoModal.classList.add('show');photoModal.setAttribute('aria-hidden','false');navigator.vibrate?.(20)}
document.querySelectorAll('[data-photo]').forEach(el=>el.addEventListener('click',()=>openPhoto(el)));
document.querySelector('#closePhoto').onclick=()=>{photoModal.classList.remove('show');photoModal.setAttribute('aria-hidden','true')};photoModal.onclick=e=>{if(e.target===photoModal){photoModal.classList.remove('show');photoModal.setAttribute('aria-hidden','true')}};

const form=document.querySelector('#chatForm'),input=document.querySelector('#chatText'),messages=document.querySelector('#messages');
function addBubble(text,type){const d=document.createElement('div');d.className='bubble '+type;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight;return d}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}
function normalize(text){return text.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9çğıöşü\s]/gi,' ').replace(/\s+/g,' ').trim()}
function has(q,words){return words.some(w=>q.includes(normalize(w)))}
function chance(n){return Math.random()<n}

const defaultMemory={turns:0,lastTopic:'',lastMood:'',facts:{},recentReplies:[],history:[]};
let memory;
try{memory={...defaultMemory,...JSON.parse(localStorage.getItem('furkanChatMemory')||'{}')}}catch(e){memory={...defaultMemory}}
memory.facts=memory.facts||{};memory.recentReplies=memory.recentReplies||[];memory.history=memory.history||[];
function saveMemory(){
 memory.history=memory.history.slice(-18);memory.recentReplies=memory.recentReplies.slice(-12);
 try{localStorage.setItem('furkanChatMemory',JSON.stringify(memory))}catch(e){}
}
function uniquePick(arr){
 const available=arr.filter(x=>!memory.recentReplies.includes(x));
 const result=pick(available.length?available:arr);
 memory.recentReplies.push(result);return result;
}
function rememberFacts(raw,q){
 const name=raw.match(/(?:benim adım|adım)\s+([a-zçğıöşü]+)/i);if(name)memory.facts.name=name[1];
 if(has(q,['yorgunum','yoruldum','çok yoruldum']))memory.lastMood='yorgun';
 else if(has(q,['üzgünüm','moralim bozuk','kötüyüm','canım sıkkın']))memory.lastMood='üzgün';
 else if(has(q,['mutluyum','iyiyim','harikayım','çok güzelim']))memory.lastMood='mutlu';
 if(has(q,['işten geldim','işten çıktım']))memory.facts.justCameFromWork=true;
 if(has(q,['uyuyacağım','yatacağım','iyi geceler']))memory.facts.sleepy=true;
}
function timeGreeting(){
 const h=new Date().getHours();
 if(h<6)return 'Bu saatte hâlâ buradaysan biraz uykun gelmiştir diye düşünüyorum.';
 if(h<12)return 'Günaydın güzelim. Umarım güne güzel başlamışsındır.';
 if(h<18)return 'Günün ortasında senden mesaj görmek çok güzel.';
 return 'Akşamın en güzel mesajı senden geldi. 🤍';
}
function answer(raw){
 const q=normalize(raw);memory.turns++;rememberFacts(raw,q);
 let topic='general',pool=[];

 // Yazılan cümlenin tonunu ve ayrıntısını yakala; cevaplar daha az genel kalsın.
 const words=q.split(' ').filter(Boolean);
 const intensifier=has(q,['çok','aşırı','gerçekten','fazla','inanılmaz']);
 const wantsHug=has(q,['sarıl','sarılmak','kollarında','yanımda ol']);
 const feelsAlone=has(q,['yalnızım','yalnız hissediyorum','kimsem yok','tek başımayım']);
 const anxious=has(q,['korkuyorum','endişeliyim','kaygılıyım','stresliyim','gerildim']);
 const jealous=has(q,['kıskandım','kıskanıyorum','kıskanç']);

 if(feelsAlone){
  topic='alone';pool=['Şu an yalnız hissediyor olabilirsin ama bunu tek başına taşımana gerek yok güzelim. Buradayım; istersen hiçbir şeyi düzeltmeye çalışmadan sadece seni dinleyeyim. 🤍','Keşke yanında olup elini tutabilsem. Şimdilik bana içinden geçen tek cümleyi söyle; gerisini birlikte yavaşça açarız.','Bu cümleni geçiştirmeyeceğim. Yalnız hissettiğinde bile değerinden hiçbir şey eksilmiyor; ben seni görüyorum ve duyuyorum.'];
 }else if(anxious){
  topic='anxious';pool=['Önce benimle yavaşça nefes al olur mu? Şu an her şeyi çözmek zorunda değilsin. Seni en çok korkutan kısmı tek cümleyle anlat, birlikte küçültelim. 🤍','Belli ki zihnin biraz yorulmuş. Ben yanındaymışım gibi düşün; elini tutup “acele etme, geçecek” derdim.','Endişeni küçümsemiyorum güzelim. Şu anda kontrol edebildiğin en küçük şey neyse oradan başlayalım.'];
 }else if(jealous){
  topic='jealous';pool=['Bunu hissetmen seni kötü biri yapmaz. Benim için önemli olan içine atmak yerine açıkça söylemen. Seni neyin kıskandırdığını anlatır mısın?','Gel bunu kavga etmeden konuşalım. Kalbini rahatsız eden şeyi bilmek isterim; çünkü güvenini korumak benim için önemli. 🤍','Seni böyle hissettiren bir şey olduysa geçiştirmem. Anlat güzelim, seni gerçekten anlamaya çalışacağım.'];
 }else if(wantsHug && !has(q,['özledim','özlüyorum'])){
  topic='hug';pool=['Şu an yanında olsam önce hiçbir şey söylemeden sana sarılırdım. Sonra kulağına “buradayım yavrum, acele etmeden anlat” derdim. 🤍','Sana öyle sıkı değil, huzur verecek kadar uzun sarılırdım. Bütün günün ağırlığı biraz olsun omuzlarından insin isterdim.','Kollarımı açıp seni yanıma çekerdim; başını omzuma koyduğunda da “artık yalnız değilsin” derdim.'];
 }else 
 if(has(q,['merhaba','selam','selamlar','hey','günaydın','iyi akşamlar'])){
  topic='greeting';pool=[timeGreeting(),'Hoş geldin yavrum. Seni burada görmek yüzümü güldürdü. 🤍','Selam güzelim. Tam da senden bir mesaj gelsin diye bekliyordum sanki.','Buradayım. Bugünün nasıl geçti, bana anlatır mısın?'];
 }else if(has(q,['iyi geceler','uyuyorum','yatıyorum','uyuyacağım','uykum geldi'])){
  topic='sleep';pool=['İyi geceler yavrum. Gözlerini kapatırken yüzünde küçücük bir gülümseme olsun, olur mu? 🤍','Tatlı rüyalar güzelim. Keşke sana sarılıp öyle uyuyabilsek.','Güzelce dinlen. Yarın yine buradayım; ilk mesajını beklerim. 🌙','Uyumadan önce şunu bil: Bugün de seni çok sevdim, yarın da seveceğim.'];
 }else if(has(q,['seni seviyorum','seviyorum','beni seviyor musun','ne kadar seviyorsun','aşkım'])){
  topic='love';pool=['Seni kelimelerin anlatabileceğinden daha çok seviyorum. İyi ki hayatımdasın. ❤️','Her gün biraz daha fazla… Bunu nasıl başarıyorsun bilmiyorum ama kalbimdeki yerin hep büyüyor.','Çok seviyorum yavrum. Bazen bunu söylerken bile yetmiyormuş gibi geliyor.','Sana olan sevgimi bir cümleye sığdıramam; ama sarılabilsem hepsini anlardın. 🤍','Seviyorum. Hem en neşeli hâlini hem sessiz kaldığın anları hem de sadece sen olduğun için seni.'];
 }else if(has(q,['özledim','özlüyorum','hasret','yanımda ol'])){
  topic='miss';pool=['Ben de seni çok özledim… Şu an yanında olup sana sıkıca sarılmak isterdim.','Özlemek bazen zor ama kavuşacağımız anı düşününce içim ısınıyor. 🤍','Sesini duysam biraz geçerdi belki. Ama en güzeli seni görmek olurdu.','Aramızdaki mesafe ne olursa olsun, aklımın en güzel yerindesin.','Gel de şu özlemi birlikte bitirelim artık yavrum.'];
 }else if(has(q,['nasılsın','ne yapıyorsun','napıyorsun','naber','ne haber'])){
  topic='status';pool=['Sen yazınca daha iyi oldum. Ben iyiyim, sen gerçekten nasılsın?','Seni düşünüyordum desem fazla romantik olur mu? 😊','Burada senin mesajını okuyup gülümsüyorum. Günün nasıl geçti?','İyiyim yavrum. Ama bugün senin sesini duymayı da isterdim.','Şu an yaptığım en güzel şey seninle konuşmak.'];
 }else if(has(q,['yorgunum','yoruldum','işten geldim','işten çıktım','çok çalıştım','yoğundu'])){
  topic='tired';pool=['Gel, biraz burada dinlen. Bugün elinden geleni yaptın; şimdi kendine iyi davranma sırası sende. 🤍','Çok yorulmuşsun belli… Önce bir nefes al, su iç ve biraz dinlen olur mu?','Keşke yanında olsam da başını omzuma koyup bütün yorgunluğunu unutsan.','Bugünü de atlattın güzelim. Seninle gurur duyuyorum ama kendini fazla yorma lütfen.','İşin zor geçmiş olabilir ama artık buradasın. Bana gününün en yorucu kısmını anlat.'];
 }else if(has(q,['üzgünüm','moralim bozuk','kötüyüm','canım sıkkın','ağladım','ağlıyorum'])){
  topic='sad';pool=['Üzüldüğünü bilmek içimi acıtıyor. Yanında olamasam da burada seni dinliyorum; hiçbir şeyi tek başına taşımak zorunda değilsin. 🤍','Gel, acele etmeden anlat. Seni yargılamadan dinleyeceğim.','Bugün kötü hissetmen, her şeyin hep kötü kalacağı anlamına gelmiyor. Ben senin yanındayım.','Keşke şimdi sana sarılabilsem… Biraz ağlamak istiyorsan da bırak gelsin, sonra birlikte toparlarız.','Senin üzülmeni istemem ama her zaman güçlü görünmek zorunda da değilsin. Bana güvenebilirsin.'];
 }else if(has(q,['mutluyum','çok iyiyim','harikayım','güzel geçti','sevindim'])){
  topic='happy';pool=['Sen mutluysan benim içim de huzur doluyor. Neye bu kadar sevindin, anlat hadi. 😊','Bunu okumak yüzümü güldürdü. Mutluluğun hep böyle çoğalsın.','İşte seni böyle görmek istiyorum! O güzel enerjin bana da geçti. 🤍','Bugünün güzel geçmesine çok sevindim. En güzel anı hangisiydi?'];
 }else if(has(q,['doğum günü','iyi ki doğdun','yaş günü'])){
  topic='birthday';pool=['İyi ki doğdun yavrum. Senin doğduğun gün, benim için dünyanın güzelleştiği günlerden biri. 🎂🤍','Yeni yaşın sana huzur, kahkaha ve birlikte biriktireceğimiz çok güzel anı getirsin.','Mumlarını üflerken tuttuğun dileğin gerçekleşsin; ben de her adımında yanında olayım.','Bugün senin günün ama iyi ki varsın hediyesini aslında bana sen verdin.'];
 }else if(has(q,['beni neden seviyorsun','neden seviyorsun','neyimi seviyorsun'])){
  topic='whyLove';pool=['Seni tek bir özelliğin için sevmiyorum. Gülüşünü, bazen çocuk gibi oluşunu, duygularını saklamaya çalışırken bile gözlerinden belli etmeni… En çok da yanında kendim gibi hissedebilmeyi seviyorum. 🤍','Çünkü sen sadece güzel görünmüyorsun; hissettiriyorsun. Bir mesajınla içimi rahatlatabiliyor, küçücük bir hareketinle bütün gün aklımda kalabiliyorsun.','Sende sevdiğim şeyleri saysam biter ama seni neden sevdiğimi tek cümleyle söyleyeyim: Sen olduğun için. Başka biri gibi olmana hiç ihtiyaç duymadan.'];
 }else if(has(q,['şu an bana sarılsan','bana sarılsan'])){
  topic='hug';pool=['Sana sarılır, bir süre hiçbir şey söylemezdim. Sonra “iyi ki varsın yavrum, bugün ne yaşadıysan artık birazını bana bırak” derdim. 🤍','Başını omzuma koyduğunda saçlarını okşayıp “burada güvendesin” derdim.','Önce sıkıca sarılırdım; sonra geri çekilip gözlerinin içine bakar ve “seni düşündüğünden daha çok önemsiyorum” derdim.'];
 }else if(has(q,['bana bir şey söyle','bir cümle söyle','iltifat et','güzel bir şey söyle'])){
  topic='compliment';pool=['Gülüşün, kötü geçen bir günü bile güzelleştirebilecek kadar özel.','Senin en güzel yanın sadece yüzün değil; kalbinin içindeki o güzel, merhametli hâlin. 🤍','Bazen sana bakıp “İyi ki yollarımız kesişmiş” diye düşünüyorum.','Sen olduğun hâlinle yeterlisin, güzelsin ve çok değerlisin.','Hayatımdaki en güzel tesadüf değil, en güzel “iyi ki” sensin.'];
 }else if(has(q,['kızgın mısın','küstün mü','darıl','özür dilerim','affet'])){
  topic='apology';pool=['Sana uzun süre kızgın kalamam ben. Gel konuşalım, birbirimizi anlayalım. 🤍','Özrünü duydum güzelim. Benim için önemli olan birbirimizi kırmadan açıkça konuşabilmemiz.','Küs kalmak bize hiç yakışmıyor. Hadi bunu geride bırakıp sarılmışız gibi yapalım.','Bir hata sevgimizi değiştirmez. Yeter ki kalbimizi birbirimize kapatmayalım.'];
 }else if(has(q,['ne düşünüyorsun','beni düşünüyor musun','aklında mıyım'])){
  topic='thoughts';pool=['Sandığından çok daha sık aklımdasın. Bazen bir şarkıda, bazen küçücük bir şeyde seni hatırlıyorum.','Evet, hem de durduk yere gülümsetecek kadar. 🤍','Aklımdasın güzelim. Özellikle gün içinde “Şevval bunu görse ne derdi?” dediğim çok oluyor.','Seni düşünmek bazen en sevdiğim alışkanlık gibi geliyor.'];
 }else if(has(q,['beni ne kadar seviyor','furkan beni'])){
  topic='love';pool=['Furkan seni çok seviyor; hem de bunu anlatmak için bu küçük dünyayı sana hazırlayacak kadar. 🤍','Seni, yanında olmadığı anlarda bile gülümsemeni düşünecek kadar çok seviyor.','Bir ölçüsü olsaydı her gün sınırını aşardı. Furkan’ın kalbinde çok özel bir yerin var.'];
 }else if(has(q,['teşekkür','sağ ol','iyi ki varsın'])){
  topic='thanks';pool=['Asıl sen iyi ki varsın yavrum. 🤍','Ne demek güzelim; senin yüzünün gülmesi bana yeter.','Bunu senden duymak çok güzel. İyi ki birbirimizin hayatındayız.'];
 }else if(has(q,['evet','aynen','öyle','tabii','olur'])){
  topic='continue';
  if(memory.lastTopic==='tired')pool=['O zaman söz ver: Bu akşam kendini biraz dinlendireceksin. Ben de burada sana eşlik edeceğim.','Peki bugün seni en çok ne yordu? Anlatınca belki biraz hafifler.'];
  else if(memory.lastTopic==='sad')pool=['Ben buradayım. Hazır olduğunda, seni üzen şeyi tek tek anlatabilirsin.','Önce derin bir nefes alalım. Sonra ne olduysa birlikte konuşuruz.'];
  else if(memory.lastTopic==='love')pool=['Bunu bilmen benim için önemli. Sana sevgimi her fırsatta hissettirmek istiyorum. 🤍','O zaman gel, bugün birbirimize en sevdiğimiz şeyleri söyleyelim.'];
  else pool=['Bunu duymak güzel. Biraz daha anlat bakalım, seni dinliyorum.','Tamam güzelim. Peki şu an aklından geçen ilk şey ne?'];
 }else if(has(q,['hayır','değil','istemiyorum','yok'])){
  topic='continue';pool=['Tamam yavrum, seni zorlamam. İstersen sadece burada sessizce yanında kalırım. 🤍','Peki, o zaman başka bir şey konuşalım. Şu an sana ne iyi gelirdi?','Anladım güzelim. Ne zaman hazır hissedersen buradayım.'];
 }else if(q.endsWith('?')||has(q,['neden','nasıl','sence','hangisi','ne zaman'])){
  topic='question';pool=['Bence bunun tek bir cevabı yok ama senin ne düşündüğünü gerçekten merak ediyorum.','Kalbimden geçen ilk cevabı söyleyeyim: Senin için en doğru ve en huzurlu olanı isterim. 🤍','Bunu birlikte düşünelim. Önce senin içinden geçen cevabı söyler misin?','Ben olsam karar verirken seni en çok neyin mutlu edeceğine bakardım.'];
 }else{
  topic='general';pool=['Bunu bana anlatman çok hoşuma gitti. Devamını da merak ettim. 🤍','Seni dinliyorum güzelim; söylediklerin benim için önemli.','Bunu okuyunca sanki karşımda anlatıyormuşsun gibi hissettim.','Seninle böyle konuşabilmek çok güzel. Peki sonra ne oldu?','Bazen sadece mesajını görmek bile yetiyor bana.','Bunu biraz daha açar mısın? Ne hissettiğini gerçekten anlamak istiyorum.'];
 }

 let reply=uniquePick(pool);
 if(topic==='general' && words.length>=5){
  const clean=raw.replace(/[!?.,]+$/,'').trim();
  const short=clean.length>74?clean.slice(0,71)+'…':clean;
  reply='“'+short+'” demen, bunun senin için gerçekten önemli olduğunu hissettirdi. '+reply;
 }
 if(intensifier && ['sad','tired','miss','anxious','alone'].includes(topic)) reply=reply.replace('güzelim','güzelim, gerçekten');
 if(memory.turns>2 && memory.lastMood==='yorgun' && topic!=='tired' && chance(.14))reply+=' Bu arada biraz önce yorulduğunu söylemiştin; dinlenmeyi unutma olur mu?';
 if(memory.turns>2 && memory.lastMood==='üzgün' && topic!=='sad' && chance(.15))reply+=' Biraz önce moralinin bozuk olduğunu söylemiştin; şimdi az da olsa daha iyi misin?';
 if(memory.facts.name && chance(.12))reply=memory.facts.name+', '+reply.charAt(0).toLocaleLowerCase('tr-TR')+reply.slice(1);
 memory.lastTopic=topic;memory.history.push({q:raw,a:reply,topic,time:Date.now()});saveMemory();return reply;
}
function sendBotReply(q){
 const reply=answer(q);const delay=Math.min(2300,650+reply.length*13+Math.random()*450);
 setTimeout(()=>{const typing=addBubble('Furkan yazıyor…','bot');typing.classList.add('typing');setTimeout(()=>{typing.remove();addBubble(reply,'bot')},delay)},250+Math.random()*250)
}
form.onsubmit=e=>{e.preventDefault();const q=input.value.trim();if(!q)return;addBubble(q,'user');input.value='';sendBotReply(q)};
document.querySelectorAll('[data-quick]').forEach(b=>b.onclick=()=>{input.value=b.dataset.quick;form.requestSubmit()});

const canvas=document.querySelector('#stars'),ctx=canvas.getContext('2d');let stars=[];function resize(){canvas.width=innerWidth;canvas.height=innerHeight;stars=Array.from({length:Math.min(150,innerWidth/5)},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.3+.2,a:Math.random()}))}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);for(const s of stars){s.a+=.012;ctx.globalAlpha=.25+Math.abs(Math.sin(s.a))*.65;ctx.fillStyle='white';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,7);ctx.fill()}requestAnimationFrame(draw)}addEventListener('resize',resize);resize();draw();

// En Güzel Hâllerin — aşağı kaydırılan sinematik galeri
(()=>{
 const stack=document.querySelector('#verticalMemoryStack');
 const startButton=document.querySelector('#startMemories');
 if(!stack)return;

 const cards=[...stack.querySelectorAll('.vertical-memory-card')];
 const photoModal=document.querySelector('#cinematicPhotoModal');
 const photoModalImage=document.querySelector('#cinematicPhotoImage');
 const photoModalCaption=document.querySelector('#cinematicPhotoCaption');
 const photoModalCount=document.querySelector('#cinematicPhotoCount');
 const photoModalClose=document.querySelector('#cinematicPhotoClose');
 const photoModalPrev=document.querySelector('#cinematicPhotoPrev');
 const photoModalNext=document.querySelector('#cinematicPhotoNext');
 const albumProgress=document.querySelector('#portraitAlbumProgress');
 const albumHeart=document.querySelector('#portraitAlbumHeart');
 const photoModalFrame=photoModal?.querySelector('.cinematic-photo-frame');
 const finaleClose=document.querySelector('#closePortraitAlbumFinale');
 cards.forEach(()=>albumProgress?.appendChild(document.createElement('i')));
 const albumProgressItems=[...(albumProgress?.children||[])];
 let activePhotoIndex=0,touchStartX=0,modalLastTap=0,photoLockScrollY=0,swipeStartX=null,swipeStartY=null,swipeLocked=false,swipeIntent='';
 const lockPhotoBody=()=>{
  photoLockScrollY=window.scrollY||window.pageYOffset||0;
  document.body.style.position='fixed';
  document.body.style.top=`-${photoLockScrollY}px`;
  document.body.style.left='0';
  document.body.style.right='0';
  document.body.style.width='100%';
 };
 const unlockPhotoBody=()=>{
  document.body.style.position='';
  document.body.style.top='';
  document.body.style.left='';
  document.body.style.right='';
  document.body.style.width='';
  window.scrollTo(0,photoLockScrollY||0);
 };
 const showPhoto=index=>{
  if(!photoModal)return;
  activePhotoIndex=Math.max(0,Math.min(index,cards.length));
  const isFinale=activePhotoIndex===cards.length;
  photoModal.classList.toggle('show-finale',isFinale);
  if(!isFinale){
   const card=cards[activePhotoIndex],img=card.querySelector('img');
   photoModalImage.src=img.currentSrc||img.src;
   photoModalImage.alt=img.alt;
   photoModalCaption.textContent=card.querySelector('figcaption p')?.textContent||'';
   photoModalCount.textContent=String(activePhotoIndex+1).padStart(2,'0')+' / '+String(cards.length).padStart(2,'0');
  }
  albumProgressItems.forEach((item,i)=>{
   item.classList.toggle('is-active',!isFinale&&i===activePhotoIndex);
   item.classList.toggle('is-done',isFinale||i<activePhotoIndex);
  });
  if(photoModalPrev)photoModalPrev.disabled=activePhotoIndex===0;
  if(photoModalNext)photoModalNext.disabled=isFinale;
  photoModal.classList.add('show');
  photoModal.setAttribute('aria-hidden','false');
  document.body.classList.add('cinematic-photo-open');
  lockPhotoBody();
 };
 startButton?.addEventListener('click',()=>showPhoto(0));
 const hidePhoto=()=>{
  photoModal?.classList.remove('show');
  photoModal?.classList.remove('show-finale');
  photoModal?.setAttribute('aria-hidden','true');
  document.body.classList.remove('cinematic-photo-open');
  unlockPhotoBody();
 };
 photoModalClose?.addEventListener('click',hidePhoto);
 finaleClose?.addEventListener('click',hidePhoto);
 photoModalPrev?.addEventListener('click',()=>showPhoto(activePhotoIndex-1));
 photoModalNext?.addEventListener('click',()=>showPhoto(activePhotoIndex+1));
 photoModal?.addEventListener('click',e=>{if(e.target===photoModal)hidePhoto()});
 photoModalFrame?.addEventListener('click',()=>{
  const now=Date.now();
  if(now-modalLastTap<340&&albumHeart){
   albumHeart.classList.remove('pop');void albumHeart.offsetWidth;albumHeart.classList.add('pop');
   navigator.vibrate?.(18);
  }
  modalLastTap=now;
 });
 const swipeStart=e=>{
  const point=e.touches?.[0]||e;
  swipeStartX=point.clientX;swipeStartY=point.clientY;
  swipeLocked=true;swipeIntent='';
 };
 const swipeMove=e=>{
  if(swipeStartX==null)return;
  const point=e.touches?.[0]||e;
  const dx=point.clientX-swipeStartX;
  const dy=point.clientY-swipeStartY;
  if(!swipeIntent){
   if(Math.abs(dx)>10||Math.abs(dy)>10){
    swipeIntent=Math.abs(dx)>Math.abs(dy)?'horizontal':'vertical';
   }
  }
  if(swipeIntent==='horizontal'){
   e.preventDefault();
  }
 };
 const swipeEnd=e=>{
  if(swipeStartX==null)return;
  const point=e.changedTouches?.[0]||e;
  const dx=point.clientX-swipeStartX;
  const dy=point.clientY-swipeStartY;
  swipeStartX=null;swipeStartY=null;swipeLocked=false;
  if(Math.abs(dx)>34&&Math.abs(dx)>Math.abs(dy)*1.08){
   showPhoto(activePhotoIndex+(dx<0?1:-1));
  }
 };
 photoModalFrame?.addEventListener('touchstart',swipeStart,{passive:true});
 photoModalFrame?.addEventListener('touchmove',swipeMove,{passive:false});
 photoModalFrame?.addEventListener('touchend',swipeEnd,{passive:true});
 photoModalFrame?.addEventListener('touchcancel',swipeEnd,{passive:true});
 document.addEventListener('keydown',e=>{
  if(!photoModal?.classList.contains('show'))return;
  if(e.key==='Escape')hidePhoto();
  if(e.key==='ArrowLeft')showPhoto(activePhotoIndex-1);
  if(e.key==='ArrowRight')showPhoto(activePhotoIndex+1);
 });
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting) entry.target.classList.add('in-view');
  });
 },{threshold:.18,rootMargin:'0px 0px -8% 0px'});

 cards.forEach(card=>{
  observer.observe(card);
  const media=card.querySelector('.vertical-memory-media');
  const heart=card.querySelector('.vertical-double-heart');
  let lastTap=0,singleTapTimer=0;
  const popHeart=()=>{
   heart.classList.remove('pop');
   void heart.offsetWidth;
   heart.classList.add('pop');
   navigator.vibrate?.(18);
  };
  media.addEventListener('click',()=>{
   const now=Date.now();
   if(now-lastTap<340){
    clearTimeout(singleTapTimer);
    popHeart();
   }else{
    singleTapTimer=setTimeout(()=>showPhoto(Number(card.dataset.memoryIndex)||0),350);
   }
   lastTap=now;
  });
  media.addEventListener('keydown',e=>{
   if(e.key==='Enter'||e.key===' '){e.preventDefault();showPhoto(Number(card.dataset.memoryIndex)||0)}
  });
 });
})();

// Dinlerken Beni Hatırla — etkileşimli lyric TV
(()=>{
 const set=document.querySelector('#lyricsTvSet'),player=document.querySelector('#lyricsTvPlayer'),off=document.querySelector('#lyricsTvOff'),power=document.querySelector('#lyricsTvPower'),remote=document.querySelector('.lyrics-remote'),status=document.querySelector('#lyricsTvStatus');
 if(!set||!player||!off||!power||!remote||!status)return;
 const tvSection=set.closest('#lyricsTv'),appRoot=document.querySelector('#app');
 if(tvSection&&appRoot)appRoot.appendChild(tvSection);
 let isOn=false,volume=70,muted=false;
 const playlist=[
  {artist:'Pera',title:'Sevgilim İyi Ki Doğdun',src:'assets/pera-sevgilim-iyi-ki-dogdun.mp4'},
  {artist:'Carla Morrison',title:'Disfruto',src:'assets/carla-morrison-disfruto.mp4'},
  {artist:'Duman',title:'Senden Daha Güzel',src:'assets/duman-senden-daha-guzel.mp4'},
  {artist:'',title:'Her Neredeysen',src:'assets/her-neredeysen.mp4'},
  {artist:'BLOK3',title:'Sebebi Yar',src:'assets/blok3-sebebi-yar.mp4'},
  {artist:'Yaprak Çamlıca',title:'Yüce İnsan',src:'assets/yaprak-camlica-yuce-insan.mp4'}
 ];
 let trackIndex=0;
 const pageAudio=[document.querySelector('#audio'),document.querySelector('#sleepMemorySong')].filter(Boolean);
 const backgroundAdele=document.querySelector('#sleepMemorySong');
 let backgroundAdeleTime=0;
 const updateStatus=text=>{status.textContent=text};
 const pausePageAudio=()=>pageAudio.forEach(a=>a.pause());
 const playButton=remote.querySelector('.lyrics-play');
 const channel=document.querySelector('#lyricsTvChannel');
 player.volume=volume/100;
 const updatePlayButton=()=>{playButton.textContent=player.paused?'▶':'Ⅱ'};
 const loadTrack=(index,{autoplay=true}={})=>{
  trackIndex=(index+playlist.length)%playlist.length;
  const track=playlist[trackIndex];
  player.src=track.src;player.load();
  if(channel)channel.innerHTML=`<small>KANAL ${String(trackIndex+1).padStart(2,'0')} • ${trackIndex+1}/${playlist.length}</small><b>${track.artist} — ${track.title}</b>`;
  updateStatus(`${trackIndex+1}/${playlist.length} • ${track.title}`);
  set.classList.remove('channel-changing');void set.offsetWidth;set.classList.add('channel-changing');
  if(autoplay&&isOn)player.play().catch(()=>updateStatus('Oynatmak için ▶'));
 };
 const turnOn=()=>{
  isOn=true;set.classList.add('is-on');remote.classList.add('is-on');document.body.classList.add('tv-is-on');updateStatus('Açık');
  backgroundAdeleTime=backgroundAdele?.currentTime||backgroundAdeleTime;
  pausePageAudio();
  player.play().then(()=>{updatePlayButton();updateStatus('Oynatılıyor')}).catch(()=>{updatePlayButton();updateStatus('Oynatmak için ▶')});
 };
 const turnOff=()=>{
  player.pause();isOn=false;set.classList.remove('is-on');remote.classList.remove('is-on');document.body.classList.remove('tv-is-on');updatePlayButton();updateStatus('Kapalı');
  if(backgroundAdele){backgroundAdele.currentTime=Math.min(backgroundAdeleTime,Math.max(0,(backgroundAdele.duration||backgroundAdeleTime)-.1));backgroundAdele.play().catch(()=>{})}
 };
 power.addEventListener('click',()=>isOn?turnOff():turnOn());
 remote.querySelectorAll('[data-tv-action]').forEach(btn=>btn.addEventListener('click',()=>{
  if(!isOn){turnOn();return}
  const action=btn.dataset.tvAction;
  if(action==='playPause'){if(player.paused)player.play();else player.pause();updateStatus(player.paused?'Duraklatıldı':'Oynatılıyor')}
  if(action==='volumeUp'){muted=false;player.muted=false;volume=Math.min(100,volume+10);player.volume=volume/100;updateStatus(`Ses ${volume}`)}
  if(action==='volumeDown'){volume=Math.max(0,volume-10);player.volume=volume/100;updateStatus(`Ses ${volume}`)}
  if(action==='mute'){muted=!muted;player.muted=muted;updateStatus(muted?'Sessiz':'Ses açık')}
  if(action==='restart'){player.currentTime=0;player.play();updateStatus('Başa sarıldı')}
  if(action==='back10'){player.currentTime=Math.max(0,player.currentTime-10);updateStatus('10 saniye geri')}
  if(action==='forward10'){player.currentTime=Math.min(player.duration||Infinity,player.currentTime+10);updateStatus('10 saniye ileri')}
  if(action==='previous'){if(player.currentTime>3){player.currentTime=0;player.play();updateStatus('Şarkı başa sarıldı')}else loadTrack(trackIndex-1)}
  if(action==='next')loadTrack(trackIndex+1)
  if(action==='fullscreen'){const target=player.requestFullscreen||player.webkitRequestFullscreen;target?.call(player)}
  navigator.vibrate?.(16);
 }));
 player.addEventListener('play',()=>{updatePlayButton();updateStatus('Oynatılıyor')});
 player.addEventListener('pause',()=>{updatePlayButton();if(isOn&&!player.ended)updateStatus('Duraklatıldı')});
 player.addEventListener('ended',()=>{updatePlayButton();updateStatus('Şarkı bitti')});
 player.addEventListener('error',()=>updateStatus('Video açılamadı'));
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&isOn)player.pause()});
 document.querySelector('#lyricsFinalOpen')?.addEventListener('click',()=>{
  if(isOn)turnOff();
  sessionStorage.setItem('finalShown','1');
  document.querySelector('#finalNotification')?.classList.remove('show');
  document.querySelector('#cassetteOverlay')?.classList.add('show');
  document.querySelector('#cassetteOverlay')?.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  document.body.classList.add('cassette-open');
  document.querySelectorAll('audio').forEach(a=>{try{a.pause()}catch(e){}});
  document.querySelectorAll('video').forEach(v=>{if(v.id!=='cassetteVideo'){try{v.pause()}catch(e){}}});
 });
 loadTrack(0,{autoplay:false});
})();


// Ortak oyun ödül sistemi: tüm mini oyunlarda aynı fotoğraf tekrar etmez.
const sevvalRewardPhotos=[
 {photo:'assets/photos/09-beyaz.webp',message:'Bu fotoğrafındaki güzelliğin çok sade ama bir o kadar da etkileyici. 🤍'},
 {photo:'assets/photos/13-pembe-elbise.webp',message:'Bu karedeki tatlılığın insanın yüzünü istemeden güldürüyor. 🌸'},
 {photo:'assets/photos/12-araba-selfie.webp',message:'Bakışların bu fotoğrafı bambaşka bir şeye dönüştürüyor.'},
 {photo:'assets/photos/15-lacivert-elbise.webp',message:'Lacivert sana gerçekten çok yakışıyor; çok zarif görünüyorsun. 💙'},
 {photo:'assets/photos/06-kafe.webp',message:'En doğal hâlin bile fotoğrafı güzelleştirmeye yetiyor.'},
 {photo:'assets/photos/14-kafe-bordo.webp',message:'Bu fotoğrafa bakınca aklıma gelen ilk kelime: güzel.'},
 {photo:'assets/photos/07-dil.webp',message:'Bu hâlin fazlasıyla tatlı, insan bakınca gülümsüyor.'},
 {photo:'assets/photos/02-deniz.webp',message:'Manzara güzel olabilir ama bu karede gözüm yine sende.'},
 {photo:'assets/photos/05-yesil.webp',message:'Renkler sana çok yakışıyor ama asıl güzellik yine sensin.'},
 {photo:'assets/photos/08-elbise.webp',message:'Bu fotoğrafındaki zarafeti gerçekten çok seviyorum.'},
 {photo:'assets/photos/03-yakin.webp',message:'Yakından bakınca bile değişmeyen tek şey: güzelliğin.'},
 {photo:'assets/photos/10-gunes.webp',message:'Güneş vurmuş ama bu fotoğrafta asıl parlayan sensin. ✨'},
 {photo:'assets/photos/11-asansor-selfie.webp',message:'Sıradan bir anı bile güzel bir kareye çevirmişsin.'},
 {photo:'assets/photos/04-deniz-selfie.webp',message:'Bu fotoğrafın insana huzur veren çok güzel bir tarafı var.'}
];
function sevvalShuffle(list){
 const a=[...list];
 for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
 return a;
}
function getSevvalUniqueReward(){
 let queue=[];
 try{queue=JSON.parse(sessionStorage.getItem('sevvalRewardQueue')||'[]')}catch(e){}
 queue=queue.filter(i=>Number.isInteger(i)&&i>=0&&i<sevvalRewardPhotos.length);
 if(!queue.length){
  queue=sevvalShuffle(sevvalRewardPhotos.map((_,i)=>i));
  const last=Number(sessionStorage.getItem('sevvalLastReward'));
  if(queue.length>1&&Number.isInteger(last)&&queue[queue.length-1]===last){
   [queue[queue.length-1],queue[0]]=[queue[0],queue[queue.length-1]];
  }
 }
 const index=queue.pop();
 sessionStorage.setItem('sevvalRewardQueue',JSON.stringify(queue));
 sessionStorage.setItem('sevvalLastReward',String(index));
 return sevvalRewardPhotos[index];
}

// Premium interactive experiences
(()=>{
 const modal=document.querySelector('#experienceModal'),content=document.querySelector('#sheetContent'),close=document.querySelector('#sheetClose');
 const discovered=new Set(JSON.parse(localStorage.getItem('sevvalDiscoveries')||'[]')); discovered.delete('vault');
 const update=()=>{const number=document.querySelector('#discoveryNumber'),bar=document.querySelector('#discoveryBar');if(number)number.textContent=discovered.size;if(bar)bar.style.width=(discovered.size/8*100)+'%';localStorage.setItem('sevvalDiscoveries',JSON.stringify([...discovered]))};
 const mark=x=>{discovered.add(x);update();navigator.vibrate?.(20)}; update();
 const show=html=>{content.innerHTML=html;modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'};
 const hide=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''};close.onclick=hide;modal.onclick=e=>{if(e.target===modal)hide()};
 const msgs=[
 'Bugün de çok güzelsin biliyor musun? 🌸','Gülüşün hâlâ en sevdiğim şey.','Sana sarılmayı gerçekten çok isterdim.','İyi ki hayatıma girdin güzelim.','Seni düşünmek günümün en güzel alışkanlığı.','Seninle konuşunca dünya biraz daha sakinleşiyor.','Gözlerinin içindeki o ışığı çok seviyorum.','Bazen sadece adını görmek bile gülümsetiyor.','Sen benim en güzel iyi kimsin.','Yüzündeki gülümseme hiç eksilmesin.','Kalbin, güzelliğinden bile daha güzel.','Sana her baktığımda yeniden hayran oluyorum.','Sen olduğun için çok özelsin.','Bana hissettirdiğin her şey için teşekkür ederim.','Mesafeler seni sevmeme engel değil.','Bir gün sana bütün bu cümleleri yüzüne söyleyeceğim.','Senin mutluluğun benim için gerçekten önemli.','En sıradan günümü bile güzelleştirebiliyorsun.','Kendine benim sana baktığım gibi bak: hayranlıkla.','İyi ki yollarımız kesişmiş.','Sesini duyduğum an içim huzur doluyor.','Sen benim şansımsın.','Seni tanımak hayatımın en güzel sürprizlerinden biri.','Güzel yüzün hep gülsün yavrum.','Varlığın bile bana iyi geliyor.','Dünyanın en tatlı insanına bakıyorsun şu an.','Seninle yaşayacağımız daha çok güzel an var.','Bazen seni ne kadar sevdiğimi kelimeler yetmiyor.','Sen benim kalbimin en güzel köşesindesin.','Bugün kendinle gurur duymayı unutma.','Her halinle çok güzelsin.','Sana kavuşacağımız günleri düşünüyorum.','Bir fotoğrafın bütün günümü değiştirebiliyor.','Benim için her zaman çok değerlisin.','Yanında olamasam da kalbim hep yanında.','İyi ki doğdun, iyi ki varsın.','Seninle konuşmak evime dönmek gibi.','Gülüşünü korumak isterdim.','Senin varlığın hayatımı güzelleştirdi.','Bu uygulamadaki her detayda biraz sevgim var.'
 ]; let queue=[]; const next=()=>{if(!queue.length)queue=[...msgs].sort(()=>Math.random()-.5);return queue.pop()};
 document.querySelector('#saySomething').onclick=()=>{mark('say');show('<h3 class="sheet-title">Sana Sığdıramadığım Kelimelerim</h3><p class="sheet-sub">Her dokunuşta Furkan’dan başka bir cümle</p><div class="say-card"><p id="sayText">'+next()+'</p><button id="sayAgain">Bir tane daha ♡</button></div>');document.querySelector('#sayAgain').onclick=()=>{document.querySelector('#sayText').animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:350});document.querySelector('#sayText').textContent=next();navigator.vibrate?.(10)}};
 const letters={
 first:{title:'İlk Bunu Aç',icon:'01',text:'Bugün sıradan bir gün değil yavrum. Bugün senin dünyaya geldiğin gün... Bu yüzden bu küçük sürprizin ilk zarfında sana sadece şunu söylemek istiyorum: İyi ki doğdun, iyi ki varsın ve iyi ki hayatımdasın. Bugün yüzündeki gülümsemenin hiç eksilmemesini istiyorum.'},
 wish:{title:'Doğum Günü Dileğin',icon:'02',text:'Mumlarını üflerken tuttuğun dileği bana söylemek zorunda değilsin. Ama ben senin için bir dilek tuttum: Yeni yaşında kalbinin istediği güzellikler seni bulsun, huzurun çoğalsın ve kendini her gün biraz daha özel hissedesin. Çünkü sen bütün güzel şeyleri hak ediyorsun.'},
 secret:{title:'Sürprizin Sırrı',icon:'03',text:'Bu uygulamadaki her yazıyı, her fotoğrafı ve her küçük ayrıntıyı seni düşünerek hazırladım. Amacım sadece bir doğum günü mesajı vermek değildi; sana benim gözümde ne kadar özel, ne kadar iyi kalpli ve ne kadar değerli biri olduğunu göstermekti. Çünkü sen benim için gerçekten çok özelsin. Sana bunların çok daha fazlasını yapmayı isterdim. Bu uygulama, sana hissettiklerimin yanında belki de çok küçük kalıyor ama içinde sana olan sevgim, emeğim ve tüm kalbim var.'},
 beginning:{title:'En Son Bunu Aç',icon:'04',text:'Eğer bu zarfı açtıysan buraya kadar benimle geldin demektir. Ama sana küçük bir sır vereyim... Aslında daha yeni başlıyoruz. Bundan sonra seni bekleyen daha birçok küçük sürpriz var. Umarım her birinde yüzünde ayrı bir gülümseme oluşur. Hazırsan devam edelim yavrum... 💙'}
 };
 const openedLetters=new Set(JSON.parse(localStorage.getItem('sevvalOpenedLetters')||'[]'));
 const saveOpened=()=>localStorage.setItem('sevvalOpenedLetters',JSON.stringify([...openedLetters]));
 const renderEnvelopeLobby=()=>{
 content.innerHTML='<div class="letter-scene"><div class="letter-stars" aria-hidden="true">✦ &nbsp; 18 ŞEVVAL &nbsp; ✦</div><h3 class="sheet-title">Doğum Günü Zarfları</h3><p class="sheet-sub">Her mührün ardında, yalnızca bugün için yazılmış bir not var.</p><div class="lux-envelope-grid">'+Object.entries(letters).map(([k,v],i)=>'<button class="lux-envelope '+(openedLetters.has(k)?'is-opened':'')+'" data-letter="'+k+'" style="--delay:'+(i*.08)+'s"><span class="envelope-glow" aria-hidden="true"></span><span class="envelope-back"></span><span class="envelope-letter-peek"><i>'+v.icon+'</i><b>'+v.title+'</b></span><span class="envelope-flap"></span><span class="envelope-pocket"></span><span class="envelope-label"><small>ŞEVVAL&#39;E ÖZEL</small><b>'+v.title+'</b><em>'+(openedLetters.has(k)?'Açıldı · Tekrar oku':'Mührü aç')+'</em></span><span class="wax-seal" aria-hidden="true"><i>F</i><span>♡</span><i>Ş</i></span></button>').join('')+'</div><p class="letter-footnote">Zarfları sırayla açmanı öneririm. Açılan mektupları yeniden okuyabilirsin. 🤍</p></div>';
 content.querySelectorAll('[data-letter]').forEach(btn=>btn.onclick=()=>openLetter(btn.dataset.letter,btn));
 };
 const openLetter=(key,btn)=>{
 const l=letters[key];
 btn.classList.add('breaking'); navigator.vibrate?.([35,35,55]);
 setTimeout(()=>{
  openedLetters.add(key);saveOpened();
  content.innerHTML='<div class="opened-letter-wrap"><div class="opened-envelope" aria-hidden="true"><span class="opened-flap"></span><span class="opened-pocket"></span><span class="broken-seal">F♡Ş</span></div><article class="lux-letter"><div class="letter-corners" aria-hidden="true">✦</div><div class="letter-flower">⚜</div><small>28 AĞUSTOS · ŞEVVAL&#39;E</small><h3>'+l.title+'</h3><div class="letter-rule"><span></span><i>♡</i><span></span></div><p>'+l.text+'</p><div class="letter-sign"><span>Tüm kalbimle...</span><b>Furkan</b></div><button id="backLetters">← Diğer zarflara dön</button></article></div>';
  document.querySelector('#backLetters').onclick=renderEnvelopeLobby;
 },720);
 };
 document.querySelector('#openEnvelopes').onclick=()=>{mark('letters');show('');renderEnvelopeLobby()};
 const rewardPhotos=[
 {photo:'assets/photos/09-beyaz.webp',message:'Bu fotoğrafındaki güzelliğin çok sade ama bir o kadar da etkileyici. 🤍'},
 {photo:'assets/photos/13-pembe-elbise.webp',message:'Bu karedeki tatlılığın insanın yüzünü istemeden güldürüyor. 🌸'},
 {photo:'assets/photos/12-araba-selfie.webp',message:'Bakışların bu fotoğrafı bambaşka bir şeye dönüştürüyor.'},
 {photo:'assets/photos/15-lacivert-elbise.webp',message:'Lacivert sana gerçekten çok yakışıyor; çok zarif görünüyorsun. 💙'},
 {photo:'assets/photos/06-kafe.webp',message:'En doğal hâlin bile fotoğrafı güzelleştirmeye yetiyor.'},
 {photo:'assets/photos/14-kafe-bordo.webp',message:'Bu fotoğrafa bakınca aklıma gelen ilk kelime: güzel.'},
 {photo:'assets/photos/07-dil.webp',message:'Bu hâlin fazlasıyla tatlı, insan bakınca gülümsüyor.'},
 {photo:'assets/photos/02-deniz.webp',message:'Manzara güzel olabilir ama bu karede gözüm yine sende.'},
 {photo:'assets/photos/05-yesil.webp',message:'Renkler sana çok yakışıyor ama asıl güzellik yine sensin.'},
 {photo:'assets/photos/08-elbise.webp',message:'Bu fotoğrafındaki zarafeti gerçekten çok seviyorum.'},
 {photo:'assets/photos/03-yakin.webp',message:'Yakından bakınca bile değişmeyen tek şey: güzelliğin.'},
 {photo:'assets/photos/10-gunes.webp',message:'Güneş vurmuş ama bu fotoğrafta asıl parlayan sensin. ✨'},
 {photo:'assets/photos/11-asansor-selfie.webp',message:'Sıradan bir anı bile güzel bir kareye çevirmişsin.'},
 {photo:'assets/photos/04-deniz-selfie.webp',message:'Bu fotoğrafın insana huzur veren çok güzel bir tarafı var.'}
 ];
 const showPhotoReward=(title='Sürprizi kazandın',icon='🤍')=>{const r=getSevvalUniqueReward();content.innerHTML=`<div class="reward-reveal"><small class="reward-kicker">${icon} KÜÇÜK BİR SÜRPRİZ</small><div class="reward-polaroid"><img src="${r.photo}" alt="Şevval'in fotoğrafı"></div><h3>${title}</h3><p>${r.message}</p><button id="rewardClose" type="button">Kalbime koy ♡</button></div>`;document.querySelector('#rewardClose').onclick=hide;createPetalBurst();navigator.vibrate?.([45,35,80])};

 const openGiftBtn=document.querySelector('#openGift'); if(openGiftBtn) openGiftBtn.onclick=()=>{mark('gift');show('<h3 class="sheet-title">Hediye Kutusu</h3><p class="sheet-sub">Önce dokun, sonra bir kez daha...</p><div class="gift-box-stage"><div class="gift-box" id="giftBox">🎁</div></div>');let taps=0;document.querySelector('#giftBox').onclick=e=>{taps++;e.currentTarget.classList.remove('shake');void e.currentTarget.offsetWidth;e.currentTarget.classList.add('shake');navigator.vibrate?.(35);if(taps>1)setTimeout(()=>{showPhotoReward('Hediye kutusunun içinden sen çıktın 💙','🎁')},450)}};
 const holdHeartBtn=document.querySelector('#holdHeart'); if(holdHeartBtn) holdHeartBtn.onclick=()=>{mark('heart');show('<h3 class="sheet-title">Kalbimi Tut</h3><p class="sheet-sub">Kalbe dört saniye basılı tut</p><div class="hold-stage"><div><div class="hold-heart" id="holdHeartBig">♥</div><p class="hold-result" id="holdResult">Ben de seni seviyorum.</p></div></div>');let timer;const h=document.querySelector('#holdHeartBig'),r=document.querySelector('#holdResult');const start=()=>{h.classList.add('holding');timer=setTimeout(()=>{r.classList.add('show');navigator.vibrate?.([60,40,100]);createPetalBurst();setTimeout(()=>showPhotoReward('Kalbimi sabırla tuttun 🤍','❤️'),900)},4000)};const stop=()=>{clearTimeout(timer);if(!r.classList.contains('show'))h.classList.remove('holding')};['mousedown','touchstart'].forEach(x=>h.addEventListener(x,start,{passive:true}));['mouseup','mouseleave','touchend','touchcancel'].forEach(x=>h.addEventListener(x,stop,{passive:true}))};
 const daily=['Bugün kendine biraz zaman ayır olur mu? ❤️','Bugün aynaya baktığında ne kadar güzel olduğunu hatırla. 🌸','Küçük şeylerin keyfini çıkar; bugün senin günün.','Ne olursa olsun, sana inanan biri olduğunu unutma.','Bugün yüzünü güldürecek bir şey mutlaka olacak. ✨','Kendine nazik davran güzelim.']; const now=new Date();document.querySelector('#dailyDate').textContent=now.toLocaleDateString('tr-TR',{day:'numeric',month:'long'}).toLocaleUpperCase('tr-TR');document.querySelector('#dailyMessage').textContent=daily[Math.floor(now.setHours(0,0,0,0)/86400000)%daily.length];
 const footer=document.querySelector('#finale'),notif=document.querySelector('#finalNotification'),final=document.querySelector('#finalScreen'),lyricsTv=document.querySelector('#lyricsTv');let shown=sessionStorage.getItem('finalShown');
 // TV bölümü bulunan sürümde final bildirimi kendiliğinden açılmaz.
 // Böylece Şevval şarkıları izlerken ekranın üzerine bir bildirim gelmez;
 // final, televizyonun yanındaki açık düğmeyle istenildiği anda açılır.
 if(!lyricsTv)new IntersectionObserver(es=>{if(es[0].isIntersecting&&!shown){shown='1';sessionStorage.setItem('finalShown','1');setTimeout(()=>{notif.classList.add('show');notif.setAttribute('aria-hidden','false');navigator.vibrate?.([45,55,80])},1500)}},{threshold:.58}).observe(footer);
 const closeFinalNote=()=>{notif.classList.remove('show');notif.setAttribute('aria-hidden','true')};
 document.querySelector('#notificationCard').onclick=()=>{closeFinalNote();final.classList.add('show')};
 document.querySelector('#dismissNotification').onclick=closeFinalNote;
 document.querySelector('#notificationLater').onclick=closeFinalNote;
 notif.onclick=e=>{if(e.target===notif)closeFinalNote()};
 document.querySelector('#closeFinal').onclick=()=>final.classList.remove('show');
})();

// Puzzle-like secret experiences
(()=>{
 const modal=document.querySelector('#experienceModal'), content=document.querySelector('#sheetContent');
 const show=html=>{content.innerHTML=html;modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'};
 const discoveries=new Set(JSON.parse(localStorage.getItem('sevvalDiscoveries')||'[]')); discoveries.delete('vault');
 const mark=x=>{discoveries.add(x);localStorage.setItem('sevvalDiscoveries',JSON.stringify([...discoveries]));const n=document.querySelector('#discoveryNumber'),b=document.querySelector('#discoveryBar');if(n)n.textContent=discoveries.size;if(b)b.style.width=(Math.min(discoveries.size,8)/8*100)+'%';navigator.vibrate?.(25)};
 mark('_init'); discoveries.delete('_init'); localStorage.setItem('sevvalDiscoveries',JSON.stringify([...discoveries])); const n=document.querySelector('#discoveryNumber'),b=document.querySelector('#discoveryBar');if(n)n.textContent=discoveries.size;if(b)b.style.width=(Math.min(discoveries.size,8)/8*100)+'%';
 const rewardPhotos=[
 {photo:'assets/photos/09-beyaz.webp',message:'Bu fotoğrafındaki sadelik sana çok yakışıyor. 🤍'},
 {photo:'assets/photos/13-pembe-elbise.webp',message:'Bu karede gerçekten çok tatlı görünüyorsun. 🌸'},
 {photo:'assets/photos/12-araba-selfie.webp',message:'Bakışlarının bu fotoğrafa kattığı şeyi çok seviyorum.'},
 {photo:'assets/photos/15-lacivert-elbise.webp',message:'Lacivert sana çok yakışıyor; fazlasıyla zarifsin. 💙'},
 {photo:'assets/photos/06-kafe.webp',message:'Doğal hâlin her zaman en güzel hâllerinden biri.'},
 {photo:'assets/photos/14-kafe-bordo.webp',message:'Bu fotoğrafına bakınca istemeden gülümsüyorum.'},
 {photo:'assets/photos/07-dil.webp',message:'Bu hâlin o kadar tatlı ki insanın içini ısıtıyor.'},
 {photo:'assets/photos/02-deniz.webp',message:'Manzara güzel ama bu karede gözüm yine sende.'},
 {photo:'assets/photos/05-yesil.webp',message:'Renkler sana değil, sen renklere güzellik katıyorsun.'},
 {photo:'assets/photos/08-elbise.webp',message:'Bu fotoğrafındaki zarafeti gerçekten çok seviyorum.'},
 {photo:'assets/photos/03-yakin.webp',message:'Yakından bakınca daha da güzel görünüyorsun.'},
 {photo:'assets/photos/10-gunes.webp',message:'Güneşin altında bile en çok sen parlıyorsun. ✨'},
 {photo:'assets/photos/11-asansor-selfie.webp',message:'En sıradan anı bile güzel bir kareye çevirmişsin.'},
 {photo:'assets/photos/04-deniz-selfie.webp',message:'Bu fotoğrafın insana huzur veren bir tarafı var.'}
 ];
 const unlock=(title,text,icon='❤️')=>{const r=getSevvalUniqueReward();show(`<div class="reward-reveal"><small class="reward-kicker">${icon} GİZLİ SÜRPRİZ AÇILDI</small><div class="reward-polaroid"><img src="${r.photo}" alt="Şevval'in fotoğrafı"></div><h3>${title}</h3><p>${r.message}</p><button id="rewardClosePuzzle" type="button">Kalbime koy ♡</button></div>`);document.querySelector('#rewardClosePuzzle').onclick=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''};navigator.vibrate?.([45,35,80])};
 function lilyGame(){
 show(`<h3 class="sheet-title">Zambağı Tamamla</h3><p class="sheet-sub">Dağılmış altı yaprağa dokun ve çiçeği tamamla.</p><div class="lily-game" id="lilyGame"><div class="lily-target" id="lilyTarget"><span class="lily-center">♡</span></div><button class="loose-petal p1" data-petal="0">❀</button><button class="loose-petal p2" data-petal="1">❀</button><button class="loose-petal p3" data-petal="2">❀</button><button class="loose-petal p4" data-petal="3">❀</button><button class="loose-petal p5" data-petal="4">❀</button><button class="loose-petal p6" data-petal="5">❀</button></div><p class="lily-status" id="lilyStatus">0 / 6 yaprak birleşti</p>`);
 let count=0; const target=document.querySelector('#lilyTarget');
 content.querySelectorAll('.loose-petal').forEach(btn=>btn.onclick=()=>{
  if(btn.classList.contains('collected'))return;
  btn.classList.add('collected'); count++; navigator.vibrate?.(18);
  const petal=document.createElement('i'); petal.className='built-petal petal-'+count; target.appendChild(petal);
  document.querySelector('#lilyStatus').textContent=`${count} / 6 yaprak birleşti`;
  if(count===6){target.classList.add('complete');document.querySelector('#lilyStatus').textContent='Zambak tamamlandı 🤍';mark('lily');setTimeout(()=>unlock('Zambağı tamamladın','Her yaprağı bir araya getirdiğin gibi, bu hediyenin bütün güzel detayları da senin için bir araya geldi.','🌺'),850)}
 });
 }
 document.querySelector('#openLily')?.addEventListener('click',lilyGame);
 document.querySelector('#secretDate')?.addEventListener('click',()=>{mark('date');unlock('Tarihi fark ettin','01.08.2025... Her şeyin başladığı tarih. O gün hayatıma girdiğin için hâlâ çok mutluyum.','🗓️')});
 document.querySelector('#openPuzzle')?.addEventListener('click',()=>{show('<h3 class="sheet-title">Fotoğraf Bulmacası</h3><p class="sheet-sub">Parçaları boş alana kaydır ve resmi tamamla.</p><div id="puzzle" class="puzzle-board"></div><p id="puzzleStatus" class="puzzle-status">Henüz tamamlanmadı...</p>');let arr=[0,1,2,3,4,5,6,8,7],empty=7;const board=document.querySelector('#puzzle');const draw=()=>{board.innerHTML='';arr.forEach((tile,pos)=>{const el=document.createElement('button');el.className='puzzle-tile'+(tile===8?' empty':'');if(tile!==8){el.style.backgroundPosition=`${(tile%3)*-50}% ${Math.floor(tile/3)*-50}%`}el.onclick=()=>{const r=Math.floor(pos/3),c=pos%3,er=Math.floor(empty/3),ec=empty%3;if(Math.abs(r-er)+Math.abs(c-ec)===1){[arr[pos],arr[empty]]=[arr[empty],arr[pos]];empty=pos;draw();if(arr.every((v,i)=>v===i)){mark('puzzle');setTimeout(()=>unlock('Resmi tamamladın','Bu fotoğrafa her baktığımda aynı şeyi düşünüyorum: iyi ki varsın ve iyi ki seni tanımışım.','🧩'),350)}}};board.appendChild(el)})};draw()});
 document.querySelector('#openStars')?.addEventListener('click',()=>{show('<h3 class="sheet-title">Yıldızların Sırrı</h3><p class="sheet-sub">Parlayan yıldızlara doğru sırayla dokun.</p><div class="star-game" id="starGame"></div><p class="star-message" id="starMsg">İlk yıldızı bul ✨</p>');const pts=[[50,18],[27,31],[18,52],[28,72],[50,88],[72,72],[82,52],[73,31],[50,48]];let step=0;const g=document.querySelector('#starGame');pts.forEach((p,i)=>{const bt=document.createElement('button');bt.className='star-dot';bt.textContent='✦';bt.style.left=`calc(${p[0]}% - 17px)`;bt.style.top=`calc(${p[1]}% - 17px)`;bt.onclick=()=>{if(i===step){bt.classList.add('ok');step++;document.querySelector('#starMsg').textContent=step===pts.length?'Kalp tamamlandı ❤️':`${step}/${pts.length} yıldız bulundu`;if(step===pts.length){mark('stars');setTimeout(()=>unlock('Yıldızları birleştirdin','Gökyüzünde milyonlarca yıldız var ama benim şansım, seninle karşılaşmış olmak.','⭐'),450)}}else{step=0;g.querySelectorAll('.star-dot').forEach(x=>x.classList.remove('ok'));document.querySelector('#starMsg').textContent='Sıra bozuldu, yeniden dene.';navigator.vibrate?.(70)}};g.appendChild(bt)})});
 document.querySelector('#petalGame')?.addEventListener('click',()=>{modal.classList.remove('show');document.body.style.overflow='';let score=0,created=0;const badge=document.createElement('div');badge.className='petal-score';badge.textContent='🌸 0 / 10';document.body.appendChild(badge);const iv=setInterval(()=>{if(created++>=16){clearInterval(iv);return}const p=document.createElement('button');p.className='petal-fly';p.textContent='🌸';p.style.left=(5+Math.random()*88)+'vw';p.style.top='-40px';p.style.animationDuration=(4+Math.random()*3)+'s';p.onclick=()=>{score++;badge.textContent=`🌸 ${score} / 10`;p.remove();navigator.vibrate?.(12);if(score>=10){clearInterval(iv);document.querySelectorAll('.petal-fly').forEach(x=>x.remove());badge.remove();mark('petals');unlock('Küçük sürprizi kazandın','On yaprağın her biri, sana söylemek istediğim bir şeyi temsil ediyor: çok özelsin, çok güzelsin ve çok seviliyorsun.','🌸')}};document.body.appendChild(p);setTimeout(()=>p.remove(),7500)},450);setTimeout(()=>{if(score<10){document.querySelectorAll('.petal-fly').forEach(x=>x.remove());badge.remove()}},11000)});
})();

// Yeni premium romantik oyunlar
(()=>{
 const modal=document.querySelector('#experienceModal'),content=document.querySelector('#sheetContent');
 if(!modal||!content)return;
 const show=html=>{content.innerHTML=html;modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'};
 const discoveries=new Set(JSON.parse(localStorage.getItem('sevvalDiscoveries')||'[]'));
 const mark=x=>{discoveries.add(x);localStorage.setItem('sevvalDiscoveries',JSON.stringify([...discoveries]));const n=document.querySelector('#discoveryNumber'),b=document.querySelector('#discoveryBar');if(n)n.textContent=discoveries.size;if(b)b.style.width=(Math.min(discoveries.size,8)/8*100)+'%';navigator.vibrate?.(20)};
 const rewards=[
 ['assets/photos/09-beyaz.webp','Bu fotoğrafındaki sadelik sana inanılmaz yakışıyor. 🤍'],
 ['assets/photos/13-pembe-elbise.webp','Bu karedeki tatlılığın insanın yüzünü güldürüyor. 🌸'],
 ['assets/photos/15-lacivert-elbise.webp','Lacivert sana çok yakışıyor; çok zarif görünüyorsun. 💙'],
 ['assets/photos/06-kafe.webp','En doğal hâlin bile bir fotoğrafı güzelleştirmeye yetiyor.'],
 ['assets/photos/10-gunes.webp','Güneş vurmuş ama bu karede asıl parlayan sensin. ✨']
 ];
 const reward=(title,icon)=>{const r=getSevvalUniqueReward();show(`<div class="reward-reveal"><small class="reward-kicker">${icon} KÜÇÜK BİR SÜRPRİZ</small><div class="reward-polaroid"><img src="${r.photo}" alt="Şevval'in fotoğrafı"></div><h3>${title}</h3><p>${r.message}</p><button id="newGameRewardClose" type="button">Kalbime koy ♡</button></div>`);document.querySelector('#newGameRewardClose').onclick=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''};navigator.vibrate?.([40,30,75])};

 document.querySelector('#ourBeginning')?.addEventListener('click',()=>{
 mark('beginning');
 show(`<div class="emotion-sheet beginning-sheet">
  <small class="emotion-sheet-kicker">01 • 08 • 2025</small>
  <h3>Bir gün değil,<br><em>sana çıkan yolum.</em></h3>
  <p class="emotion-sheet-lead">01.08.2025… O gün, bir gün sana “yavrum” diyeceğimi; sesini huzurum, varlığını da en güzel alışkanlığım yapacağımı bilmiyordum.</p>
  <div class="beginning-line">
   <article><span>01</span><div><small>O GÜN</small><p>Tanıştığımız ilk gün, her şey o kadar tesadüfi ve tanışma şeklimiz o kadar garipti ki seni yalnızca o gün hayatıma uğramış biri sanmıştım. Zaman geçtikçe anladım; benim bir günlük sandığım o kişi, meğer bir ömür yanımda olmasını istediğim kişiymiş.</p></div></article>
   <article><span>02</span><div><small>SONRA</small><p>İlk telefon konuşmamızda, sen kurstan çıkarken bir “alo” derken bile ikimiz de çekiniyorduk. Cümlelerimiz heyecandan titrek çıkıyor, aradaki sessizliği birbirimizi güldürerek dolduruyorduk. Sonra o çekingenliğin yerini, seninle hiç düşünmeden rahatça konuşabildiğim anlar aldı. Bir zamanlar duyunca heyecanlandığım sesin, zamanla kendimi en huzurlu hissettiğim yere dönüştü.</p></div></article>
   <article><span>03</span><div><small>KOPAMADIK</small><p>İlk ayrıldığımızda her şeyin bittiğini sanmıştık. Ama ne bir kez ne de iki kez… Ne kadar uzaklaşmayı denesek de birbirimizden gerçekten kopamadık. Ayrıyken bile birbirimizin ne yaptığını, ne paylaştığını merak ettik; çünkü aklımız da kalbimiz de hâlâ birbirine dönüktü. Bizi her defasında yeniden yan yana getiren, adını koyamadığımız ama ikimizin de hissettiği bir bağ vardı. Sonunda anladım ki biz, birbirinden vazgeçebilen iki insan değil; kaybolsak bile birbirine giden yolu yeniden bulan iki insanmışız.</p></div></article>
   <article><span>04</span><div><small>HAYATIMIN BİR PARÇASI OLDUN</small><p>Bir süre sonra seninle konuşmak, günümün içindeki bir an olmaktan çıktı; günümün kendisine dönüştü. Uyandığımda aklıma gelen, güzel bir şey olduğunda anlatmak istediğim, yorulduğumda sesini duymayı aradığım kişi sendin.</p></div></article>
  </div>
  <blockquote>İyi ki o gün karşıma çıktın, Şevval.<br>01.08.2025’ten beri hayatımda olan en güzel şey sensin.</blockquote>
 </div>`);
 });

 document.querySelector('#littleDetails')?.addEventListener('click',()=>{
 const details=[
  ['Gülüşün','Sesini duymasam bile bir fotoğrafında gördüğüm gülüşün, günümün bütün ağırlığını hafifletmeye yetiyor.'],
  ['Sesin','Bazen ne söylediğin değil, yalnızca sesini duymak iyi geliyor. Sanki içimde “evdesin” diyen bir yer var.'],
  ['Uykulu hâlin','Gözlerin ağırlaştığında sesinin yavaşlamasını, bana güvenip huzurla uykuya bırakmanı çok seviyorum.'],
  ['Bakışların','Gözlüklerinin ardından bana baktığında, söylemediğin şeyleri bile anlayabilecekmişim gibi hissediyorum.'],
  ['Sen oluşun','En çok da kendin olmaya çalışmadan, bütün küçük hâllerinle yalnızca sen oluşunu seviyorum.']
 ];
 show(`<div class="emotion-sheet details-sheet">
  <small class="emotion-sheet-kicker">BELKİ SEN FARK ETMİYORSUN</small>
  <h3>Sende sevdiğim<br><em>küçük şeyler.</em></h3>
  <div class="detail-reveal" id="detailReveal"><span id="detailNumber">01 / 05</span><small id="detailTitle">${details[0][0]}</small><p id="detailText">${details[0][1]}</p></div>
  <button class="emotion-next" id="detailNext" type="button">Bir Sonrakini Aç <span>→</span></button>
 </div>`);
 let i=0;const card=document.querySelector('#detailReveal'),number=document.querySelector('#detailNumber'),title=document.querySelector('#detailTitle'),text=document.querySelector('#detailText'),next=document.querySelector('#detailNext');
 next.onclick=()=>{
  i++;
  if(i>=details.length){mark('details');next.disabled=true;next.innerHTML='Hepsini sende buldum';card.classList.add('is-final');navigator.vibrate?.([30,35,60]);return}
  card.classList.remove('is-changing');void card.offsetWidth;card.classList.add('is-changing');
  setTimeout(()=>{number.textContent=String(i+1).padStart(2,'0')+' / 05';title.textContent=details[i][0];text.textContent=details[i][1];card.classList.remove('is-changing');navigator.vibrate?.(15);if(i===details.length-1)next.innerHTML='Son Cümleyi Sakla <span>→</span>'},230);
 };
 });

 document.querySelector('#myPromises')?.addEventListener('click',()=>{
 const promises=[
  'Seni yalnızca en güzel günlerinde değil; yorulduğun, kendini eksik hissettiğin günlerde de sevmeye ve yanında olmaya devam edeceğim.',
  'Ne zaman sesimi duymak istersen, saat kaç olursa olsun yanında olacağım. Çünkü senin kendini yalnız hissettiğin hiçbir anda yalnız kalmanı istemiyorum.',
  'Hayallerini küçümsemeyecek; sen kendine inanamadığında bile sana neden inanman gerektiğini hatırlatacağım.',
  'Birlikte geçirdiğimiz hiçbir günü sıradan saymayacak, birlikte olduğumuz her anın kıymetini bilmeye devam edeceğim.'
 ];
 show(`<div class="emotion-sheet promises-sheet">
  <small class="emotion-sheet-kicker">BUGÜNDEN YARINLARIMIZA</small>
  <h3>Sana verdiğim<br><em>dört sessiz söz.</em></h3>
  <p class="emotion-sheet-lead">Her mührün altında, yalnızca söylemek değil yaşatmak istediğim bir söz var.</p>
  <div class="promise-list">${promises.map((_,i)=>`<button type="button" data-promise="${i}"><span>0${i+1}</span><b>Mührü aç</b></button>`).join('')}</div>
  <div class="promise-letter" id="promiseLetter"><small>SÖZÜM</small><p>Bir mühre dokun.</p></div>
 </div>`);
 const letter=document.querySelector('#promiseLetter');let opened=0;
 document.querySelectorAll('[data-promise]').forEach(btn=>btn.onclick=()=>{
  const i=Number(btn.dataset.promise);if(!btn.classList.contains('is-opened')){btn.classList.add('is-opened');btn.querySelector('b').textContent='Açıldı';opened++}
  letter.classList.remove('is-revealing');void letter.offsetWidth;letter.classList.add('is-revealing');letter.querySelector('small').textContent=`SÖZ ${String(i+1).padStart(2,'0')}`;letter.querySelector('p').textContent=promises[i];navigator.vibrate?.(20);
  if(opened===promises.length){mark('promises');letter.classList.add('all-opened')}
 });
 });

 document.querySelector('#ourFuture')?.addEventListener('click',()=>{
 show(`<div class="emotion-sheet future-letter-sheet">
  <small class="emotion-sheet-kicker">BUGÜNDEN GELECEĞİMİZE</small>
  <h3>Gelecekteki<br><em>bize bir mektup.</em></h3>
  <p class="emotion-sheet-lead">Henüz yaşamadığımız ama her düşündüğümde içinde seni gördüğüm günlere…</p>
  <button class="future-envelope" id="futureReveal" type="button" aria-label="Gelecekteki bize yazılan mektubu aç">
   <span class="future-envelope-flap"></span>
   <span class="future-envelope-seal">01<br><small>08</small></span>
   <b>Şevval ve Furkan’a</b>
  </button>
  <p class="future-envelope-hint" id="futureHint">Mührü açmak için dokun</p>
  <div class="future-letter-paper" id="futureCopy" aria-live="polite"></div>
 </div>`);
 document.querySelector('#futureReveal').onclick=e=>{
  e.currentTarget.disabled=true;e.currentTarget.classList.add('is-open');
  document.querySelector('#futureHint').textContent='Bu satırlar, birlikte büyüteceğimiz bütün yarınlara.';
  document.querySelector('#futureCopy').innerHTML='<small>SEVGİLİ GELECEKTEKİ BİZ,</small><p>Eğer bu mektubu bir gün yan yana okuyorsanız, bugün yalnızca hayalini kurduğum “biz” gerçekten büyümüş demektir.</p><p><b>Gelecekteki Furkan’a bir şey emanet etmek istiyorum:</b> Onu dinlemeyi, anlattığı küçücük ayrıntıları hatırlamayı ve kendini eksik hissettiği günlerde elini biraz daha sıkı tutmayı sakın unutma.</p><p><b>Gelecekteki Şevval’e de şunu söylemek istiyorum:</b> Sen, bugünkü bana ilk kez bir insanla bu kadar gerçek yarınlar hayal ettiren kişisin. Umarım yıllar boyunca sana bunu yalnızca sözlerimle değil, sevgimle de hissettirebilmişimdir.</p><p>Belki ikimiz de değiştik, büyüdük ve bazen çok yorulduk. Ama umarım sevgimiz alışkanlığa dönüşüp sıradanlaşmadı; birbirimizi her gün yeniden tanıdığımız, yeniden sevdiğimiz bir yere dönüştü.</p><strong>Şimdi birbirinize bakın. Çünkü bugünkü ben, bütün kalbiyle o ana ulaşmayı diliyor.</strong><footer>Henüz o günleri yaşamamış ama şimdiden özleyen Furkan’dan.</footer>';
  document.querySelector('#futureCopy').classList.add('is-visible');mark('future');navigator.vibrate?.([45,40,80]);
 };
 });

 document.querySelector('#openBouquet')?.addEventListener('click',()=>{
 show(`<h3 class="sheet-title">Buket Oluştur</h3><p class="sheet-sub">Buketine beş çiçek seç. Her seçim buketi biraz daha güzelleştirecek.</p><div class="bouquet-stage"><div class="flower-picker"><button class="flower-choice" data-f="🌷">🌷</button><button class="flower-choice" data-f="🌸">🌸</button><button class="flower-choice" data-f="🌹">🌹</button><button class="flower-choice" data-f="🪻">🪻</button></div><div class="bouquet-vase" id="bouquetVase"></div></div><p class="bouquet-status" id="bouquetStatus">0 / 5 çiçek seçildi</p>`);
 let count=0;const vase=document.querySelector('#bouquetVase');
 content.querySelectorAll('.flower-choice').forEach(btn=>btn.addEventListener('click',()=>{if(count>=5)return;count++;btn.classList.add('selected');const f=document.createElement('span');f.className='picked-flower';f.textContent=btn.dataset.f;f.style.marginLeft=((count-3)*24)+'px';f.style.transform=`translateX(-50%) rotate(${(count-3)*9}deg)`;f.style.zIndex=10-count;vase.appendChild(f);document.querySelector('#bouquetStatus').textContent=`${count} / 5 çiçek seçildi`;navigator.vibrate?.(15);if(count===5){mark('bouquet');document.querySelector('#bouquetStatus').textContent='Buket hazır: Bu buket senin 🤍';setTimeout(()=>reward('Hazırladığın buket kadar güzelsin','💐'),900)}}));
 });

 document.querySelector('#cleanPolaroid')?.addEventListener('click',()=>{
 const words=[
  ['Yavrum','Bazı kelimeler zamanla bir insana ait olmaya başlıyor. “Yavrum” da benim için öyle oldu. Önceden sadece güzel bir hitaptı belki ama sana söyledikçe anlamı değişti, seninle özdeşleşti. Çünkü bu kelimenin içinde sana karşı hissettiğim o tarif etmesi zor yakınlık var; seni merak etmek, iyi olduğunu bilmek istemek, üzgün olduğunda içimin rahat etmemesi, mutlu olduğunda ben de mutlu olmak gibi. Bir de senin benden en çok bu kelimeyi duymayı sevmen var. Belki bu yüzden sana “yavrum” demek diğer bütün hitaplardan biraz daha farklı hissettiriyor. Bazen sevgimi uzun uzun anlatmak yerine tek bir “yavrum” demek yetiyor sanki. Çünkü sen onun içinde söylemediğim şeyleri bile anlayabiliyorsun. Benim için “yavrum”; sana olan sevgimin, şefkatimin ve seni kendime ne kadar yakın hissettiğimin tek kelimelik hâli.'],
  ['Bebeğim','Bazı insanları hayatında bir yere koyarsın, bazılarını ise gerçekten kendinden biri gibi görmeye başlarsın. Sana “bebeğim” demem biraz bundan. İçimden sana böyle seslenmek geldiğinde aslında farkında olmadan seni ne kadar kendime yakın gördüğümü de söylüyorum. Bazen bir fotoğrafını gördüğümde içimden “benim bebeğim ya” demek geliyor, bazen yaptığın küçücük bir şeye bakıp aynı şeyi düşünüyorum. Bunun için özel bir an ya da sebep de gerekmiyor. “Bebeğim” benim için, seni kendimden biri gibi gördüğümde ve sana karşı içimde oluşan o tatlı sahiplenme hissini başka türlü anlatamadığımda kullandığım kelime.'],
  ['Kelebeğim','Sen, sana güzel bir şey söylediğimde karnında kelebekler uçuştuğunu söylerdin. Bilmiyordun ama bunu her söylediğinde benim kalbimde de sana ait küçücük bir yer daha açılıyordu. Yüzündeki bir gülümsemeye, içinde küçücük bir heyecana sebep olabilmek bana kendimi dünyanın en özel insanı gibi hissettiriyordu. Bu yüzden sana “kelebeğim” dediğimde aklıma yalnızca bir hitap değil; sana dokunmadan bile kalbine güzel bir şey hissettirebildiğim o anlar geliyor.'],
  ['Bitanem','Dünyada milyarlarca insan var ama bazı insanların yeri gerçekten bir tane oluyor. Ben sana “bitanem” derken tam olarak bunu kastediyorum. Seni başkalarından daha güzel olduğun için değil, sende bulduğum şeyleri başka hiç kimsede aramak istemediğim için bir tanem olarak görüyorum. Bazen küçücük bir hareketin, bazen söylediğin sıradan bir cümle, bazen de yalnızca orada olduğunu bilmek bile günümün havasını değiştirebiliyor. Senin yerini özel yapan tek bir özelliğin yok; seni sen yapan bütün küçük şeylerin bir araya gelmesi. O yüzden benim sözlüğümde “bitanem”, gerçekten yeri yalnızca sana ait olan kişi demek.'],
  ['Çiçeğim','Çiçekleri güzel yapan yalnızca nasıl göründükleri değildir; insana hissettirdikleri, baktığında içine bıraktıkları o güzel histir. Benim sana “çiçeğim” dememin sebebi de biraz böyle. Bazen bir mesajınla yüzümü güldürmen, bazen küçücük bir şeyle içimi ısıtman, bazen de yalnızca seni düşünmenin bile bana iyi gelmesi… Hepsi bu kelimenin içinde saklı. Bir çiçeğe nasıl incitmeden dokunmak, solmasın diye özen göstermek istersen; ben de senin kalbine hep öyle yaklaşmak istedim. Çünkü benim için sen, yalnızca güzel olduğun için çiçeğim değilsin; değer verdiğim, incitmekten korktuğum ve hep güzel kalmasını istediğim o özel yanınla benim çiçeğimsin.'],
  ['Güzelim','Sana “güzelim” dediğimde yalnızca yüzünden, gözlerinden ya da gülüşünden bahsetmiyorum. Elbette seni güzel buluyorum ama benim gördüğüm güzellik bundan çok daha fazlası. Bazen bir şeye çocuk gibi sevindiğinde, bazen farkında olmadan tatlı bir şey söylediğinde, bazen de kimsenin görmediğini düşündüğün küçücük davranışlarında ortaya çıkıyor. Seni tanıdıkça “güzel” kelimesinin benim için anlamı değişti. Artık bu kelimeyi duyduğumda yalnızca güzel bir yüz değil; huylarıyla, gülüşüyle, , kısacası olduğu hâliyle sevdiğim bir insan geliyor aklıma. Bu yüzden “güzelim” dediğimde aslında sana “ben seni yalnızca gözlerimle değil, tanıdığım her hâlinle güzel buluyorum” diyorum.'],
  ['Biz','Aynı anda aynı şeyi düşünüp aynı cümleyi kurduğumuzda, daha söylemeden birbirimizin ne diyeceğini tahmin ettiğimizde ve kimsenin anlamayacağı küçücük şeylere birlikte güldüğümüzde birbirimize ne kadar alıştığımızı hatırlatan kelime. Bazen uzaklaştık, bazen yollarımızın ayrıldığını düşündük, hatta bazı anlarda her şeyin gerçekten bittiğine inandık. Ama ne kadar uzaklaşmayı denesek de birbirimizi tamamen hayatımızdan çıkaramadık; bir şekilde aklımız da kalbimiz de yeniden birbirine döndü. Belki de bizi “biz” yapan şey yalnızca birlikte geçirdiğimiz güzel zamanlar değil, ayrı kaldığımızda bile birbirimize giden yolu unutmamamızdı. İçinde tanışmamızı, alışmamızı, özlememizi, uzaklaşmamızı ve bütün bunlara rağmen birbirimizden tam anlamıyla kopamayışımızı taşıyan küçücük ama bizim için kocaman bir kelime: Biz.']
 ];
 show(`<div class="emotion-sheet dictionary-sheet"><small class="emotion-sheet-kicker">YALNIZCA BİZE AİT</small><h3>Bizim küçük<br><em>sözlüğümüz.</em></h3><p class="emotion-sheet-lead">Bazı kelimelerin anlamını sözlükler değil, birlikte yaşadıklarımız yazar.</p><div class="dictionary-tabs">${words.map((w,i)=>`<button type="button" data-word="${i}"><span>0${i+1}</span>${w[0]}</button>`).join('')}</div><div class="dictionary-meaning" id="dictionaryMeaning"><small>BİR KELİMEYE DOKUN</small><p>Bizde saklı olan anlamını oku.</p></div></div>`);
 const meaning=document.querySelector('#dictionaryMeaning'),seen=new Set();
 document.querySelectorAll('[data-word]').forEach(btn=>btn.onclick=()=>{
  const i=Number(btn.dataset.word);seen.add(i);document.querySelectorAll('[data-word]').forEach(x=>x.classList.toggle('is-active',x===btn));btn.classList.add('is-seen');
  meaning.classList.remove('is-changing');void meaning.offsetWidth;meaning.classList.add('is-changing');meaning.innerHTML=`<small>BİZİM SÖZLÜĞÜMÜZDE</small><strong>${words[i][0]}</strong><p>${words[i][1]}</p>`;navigator.vibrate?.(18);
  if(seen.size===words.length){mark('clean');meaning.classList.add('is-complete')}
 });
 });

 document.querySelector('#messageHunt')?.addEventListener('click',()=>{
 show(`<h3 class="sheet-title">Mesaj Avı</h3><p class="sheet-sub">Bu küçük dünyada saklanan beş kalbi bul.</p><div class="hunt-stage" id="huntStage"><span class="hunt-decoration" style="left:12%;top:12%">✦</span><span class="hunt-decoration" style="right:15%;top:24%">❀</span><span class="hunt-decoration" style="left:18%;bottom:14%">☾</span><span class="hunt-decoration" style="right:14%;bottom:10%">✧</span></div><p class="hunt-status" id="huntStatus">0 / 5 kalp bulundu</p>`);
 const stage=document.querySelector('#huntStage'),pos=[[10,25],[74,12],[45,42],[18,70],[79,75]];let found=0;
 pos.forEach((p,i)=>{const h=document.createElement('button');h.className='hidden-heart';h.textContent='♡';h.style.left=p[0]+'%';h.style.top=p[1]+'%';h.addEventListener('click',()=>{if(h.classList.contains('found'))return;h.classList.add('found');h.textContent='♥';found++;navigator.vibrate?.(12);document.querySelector('#huntStatus').textContent=`${found} / 5 kalp bulundu`;if(found===5){const card=document.createElement('div');card.className='secret-message-card';card.innerHTML='<strong>Hepsini buldun 🤍</strong><p>Belki saklandılar ama sana söylemek istediğim güzel şeyler hiçbir zaman kaybolmadı.</p>';stage.appendChild(card);mark('hunt');setTimeout(()=>reward('Gizli mesajı buldun','💌'),1300)}});stage.appendChild(h)});
 });

 document.querySelector('#lightCandles')?.addEventListener('click',()=>{
 const moments=[
  ['Uyandığımda','Gözümü açtığımda, seninle konuşmak için telefona baktığım o heyecanla seni özlüyorum.'],
  ['Güzel bir şey olduğunda','Yaşadığım güzel bir şeyi herkesten önce sana anlatmak istediğim anda seni özlüyorum.'],
  ['Yorulduğumda','Günün bütün ağırlığını sesini duyarak unutmak istediğimde seni özlüyorum.'],
  ['Gece olduğunda','Seni uyuturken geçen o sakin anları hatırladığımda seni özlüyorum.'],
  ['Hiçbir sebep yokken','Bazen ortada hiçbir sebep yokken bile aklıma düşüyorsun. Galiba seni en çok da böyle anlarda özlüyorum.'],
  ['Şu an','Sen şu an bunu okurken de seni özlüyorum.']
 ];
 show(`<div class="emotion-sheet missing-sheet"><small class="emotion-sheet-kicker">GÜNÜN HER YERİNDE</small><h3>Seni özlediğim<br><em>küçük anlar.</em></h3><p class="emotion-sheet-lead">Saatlerin arasında, kimsenin fark etmediği anlarda aklım hep aynı kişiye dönüyor.</p><div class="missing-moments">${moments.map((m,i)=>`<button type="button" data-moment="${i}"><span>${['☀','✦','◷','☾','∞','♡'][i]}</span><b>${m[0]}</b><small>Dokun</small></button>`).join('')}</div><div class="missing-note" id="missingNote"><p>Bir ana dokun; seni neden özlediğimi anlatayım.</p></div></div>`);
 const note=document.querySelector('#missingNote'),opened=new Set();
 document.querySelectorAll('[data-moment]').forEach(btn=>btn.onclick=()=>{
  const i=Number(btn.dataset.moment);opened.add(i);btn.classList.add('is-opened');note.classList.remove('is-changing');void note.offsetWidth;note.classList.add('is-changing');note.innerHTML=`<small>${moments[i][0].toLocaleUpperCase('tr-TR')}</small><p>${moments[i][1]}</p>`;navigator.vibrate?.(18);
  if(opened.size===moments.length){mark('candles');note.classList.add('is-complete')}
 });
 });
})();


// Sarılma ve öpücük etkileşimleri
(()=>{
 const hugBtn=document.querySelector('#hugBtn');
 const kissBtn=document.querySelector('#kissBtn');
 const hugReply=document.querySelector('#hugReply');
 const kissReply=document.querySelector('#kissReply');
 const hugCountLabel=document.querySelector('#hugCountLabel');
 const kissCountLabel=document.querySelector('#kissCountLabel');
 const hugCard=hugBtn.closest('.affection-card');
 const kissCard=kissBtn.closest('.affection-card');
 const layer=document.querySelector('#affectionParticles');
 const moment=document.querySelector('#affectionMoment');
 const momentVisual=document.querySelector('#affectionMomentVisual');
 const momentKicker=document.querySelector('#affectionMomentKicker');
 const momentTitle=document.querySelector('#affectionMomentTitle');
 const momentLine=document.querySelector('#affectionMomentLine');
 const momentClose=document.querySelector('#affectionMomentClose');
 const momentX=document.querySelector('#affectionMomentX');
 if(!hugBtn||!kissBtn||!hugReply||!kissReply||!layer||!moment||!momentVisual||!momentKicker||!momentTitle||!momentLine||!momentClose||!momentX)return;

 let hugCount=Number(localStorage.getItem('sevvalHugCount')||0);
 let kissCount=Number(localStorage.getItem('sevvalKissCount')||0);
 const hugLines=[
  'Başını omzuma koy. Dünya biraz beklesin; ben seni bırakmadan burada kalayım.',
  'Sana sarıldığımda içimdeki bütün gürültü susuyor. Geriye yalnızca sen kalıyorsun.',
  'Keşke ekranın bittiği yerde kollarım başlasaydı da seni gerçekten sarabilseydim.',
  'Kokunu hayal ettim, saçlarını usulca okşadım. Bir anlığına gerçekten yanımdaydın.',
  'Benim için huzurun bir yeri olsaydı, senin bana sarıldığın o küçücük an olurdu.',
  'Biraz daha kalır mısın? Seni bırakmaya hiçbir zaman hazır olamıyorum.',
  'Mesafe varmış gibi davranmayalım. Şu an kollarımdasın ve ben buradayım.',
  'Ne zaman yorulsan bana gel. Konuşmadan da seni anlayabileceğim bir yerim hep var.'
 ];
 const kissLines=[
  'Öpücüğün bana ulaştı. Onu yanağımda değil, seni en çok özlediğim yerde saklıyorum.',
  'Gözlerimi kapattım ve seni düşündüm. Bıraktığın küçücük öpücük bütün yüzümü gülümsetti.',
  'Bu öpücüğün izi silinmesin; bugün nereye gidersem benimle gelsin.',
  'Onu aldım ve gülüşünün yanına koydum. Seni düşündüğüm her an yeniden bulacağım.',
  'Kalbime kadar ulaştı. Şimdi ben de alnına, seni ne kadar sevdiğimi anlatan bir öpücük bıraktım.',
  'Bir anlığına yanımdaymışsın gibi oldu. Dudaklarında kalan o güzel gülümsemeyi hayal ettim.',
  'Bu küçücük öpücüğü kimseye vermem. Çünkü içinde yalnızca ikimizin bildiği bir his var.',
  'Yakaladım. Şimdi sıra bende: gözlerini kapat ve yanağında beni hisset.'
 ];

 const updateCounts=()=>{
  if(hugCountLabel)hugCountLabel.textContent=hugCount?'Sarılman hâlâ üzerimde':'Hazırsan bana dokun';
  if(kissCountLabel)kissCountLabel.textContent=kissCount?'Öpücüğün bende saklı':'En güzel yerinde saklı kalacak';
 };
 updateCounts();

 function burst(type,count=16){
  for(let i=0;i<count;i++){
   const p=document.createElement('span');
   p.className='affection-particle'+(type==='kiss'?' kiss-particle':'');
   p.textContent=type==='hug'?'♡':'';
   p.style.left=(42+Math.random()*16)+'%';
   p.style.top=(64+Math.random()*8)+'%';
   p.style.setProperty('--x',((Math.random()-.5)*260)+'px');
   p.style.setProperty('--y',(-110-Math.random()*250)+'px');
   p.style.setProperty('--r',((Math.random()-.5)*90)+'deg');
   p.style.animationDelay=(Math.random()*.16)+'s';
   layer.appendChild(p);
   setTimeout(()=>p.remove(),1800);
  }
 }
 function pulse(btn,label){
  const original=btn.innerHTML;
  btn.disabled=true;
  btn.innerHTML=label;
  btn.classList.add('is-loved');
  setTimeout(()=>{btn.innerHTML=original;btn.disabled=false;btn.classList.remove('is-loved')},1700);
 }
 function openMoment(type,line){
  moment.classList.remove('is-hug','is-kiss');
  moment.classList.add(type==='hug'?'is-hug':'is-kiss');
  momentKicker.textContent=type==='hug'?'MESAFE BİR ANLIĞINA DURDU':'BANA BIRAKTIĞIN KÜÇÜK İZ';
  momentTitle.textContent=type==='hug'?'Şimdi kollarımdasın.':'Öpücüğün bana ulaştı.';
  momentLine.textContent=line;
  momentVisual.innerHTML=type==='hug'
   ?'<div class="embrace-stage"><span class="embrace-person left"><i></i><b></b></span><span class="embrace-person right"><i></i><b></b></span><em></em></div>'
   :'<div class="kiss-moment-mark"><svg viewBox="0 0 120 72" focusable="false"><defs><linearGradient id="kissGradientMoment" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd5e2"/><stop offset=".48" stop-color="#e486a8"/><stop offset="1" stop-color="#a63f6d"/></linearGradient></defs><path class="kiss-upper" d="M8 38C26 34 36 18 53 28C57 30 59 32 60 33C64 28 69 24 77 25C89 26 99 34 112 38C92 41 78 42 60 42C42 42 27 41 8 38Z"/><path class="kiss-lower" d="M8 38C28 43 43 57 60 58C77 57 95 46 112 38C93 42 78 45 60 45C42 45 27 42 8 38Z"/><path class="kiss-line" d="M10 38C30 39 44 42 60 42C77 42 92 40 110 38"/></svg><b></b><span></span></div>';
  moment.classList.add('is-open');moment.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
 }
 function closeMoment(){
  moment.classList.remove('is-open');moment.setAttribute('aria-hidden','true');document.body.style.overflow='';
 }
 momentClose.addEventListener('click',closeMoment);
 momentX.addEventListener('click',closeMoment);

 hugBtn.addEventListener('click',()=>{
  hugCount++;
  localStorage.setItem('sevvalHugCount',String(hugCount));
  if(navigator.vibrate)navigator.vibrate([55,45,80]);
  hugReply.textContent=hugLines[(hugCount-1)%hugLines.length];
  hugReply.classList.remove('reply-pop');void hugReply.offsetWidth;hugReply.classList.add('reply-pop');
  updateCounts();
  hugCard?.classList.add('is-receiving');setTimeout(()=>hugCard?.classList.remove('is-receiving'),1250);
  pulse(hugBtn,'Şimdi Yanımdasın');
  burst('hug',18);
  setTimeout(()=>openMoment('hug',hugLines[(hugCount-1)%hugLines.length]),320);
 });

 kissBtn.addEventListener('click',()=>{
  kissCount++;
  localStorage.setItem('sevvalKissCount',String(kissCount));
  if(navigator.vibrate)navigator.vibrate(45);
  kissReply.textContent=kissLines[(kissCount-1)%kissLines.length];
  kissReply.classList.remove('reply-pop');void kissReply.offsetWidth;kissReply.classList.add('reply-pop');
  updateCounts();
  kissCard?.classList.add('is-receiving');setTimeout(()=>kissCard?.classList.remove('is-receiving'),1250);
  pulse(kissBtn,'Bende Saklı');
  burst('kiss',20);
  setTimeout(()=>openMoment('kiss',kissLines[(kissCount-1)%kissLines.length]),320);
 });
})();

// Küçük Şevval — açılan hatıra kutusu ve çocukluk albümü
(()=>{
 const openButton=document.querySelector('#openLittleSevval');
 const album=document.querySelector('#childhoodAlbum');
 const closeButton=document.querySelector('#closeChildhoodAlbum');
 const finishButton=document.querySelector('#finishChildhoodAlbum');
 const previousButton=document.querySelector('#childhoodPrev');
 const nextButton=document.querySelector('#childhoodNext');
 const pages=[...document.querySelectorAll('.childhood-page')];
 const progress=document.querySelector('#childhoodProgress');
 if(!openButton||!album||!pages.length)return;

 let pageIndex=0,startX=0;
 pages.forEach(()=>progress?.appendChild(document.createElement('i')));
 if(progress)progress.style.gridTemplateColumns=`repeat(${pages.length},1fr)`;
 const progressItems=[...(progress?.children||[])];

 const showPage=index=>{
  pageIndex=Math.max(0,Math.min(index,pages.length-1));
  pages.forEach((page,i)=>page.classList.toggle('is-active',i===pageIndex));
  progressItems.forEach((item,i)=>{
   item.classList.toggle('is-active',i===pageIndex);
   item.classList.toggle('is-done',i<pageIndex);
  });
  if(previousButton)previousButton.disabled=pageIndex===0;
  if(nextButton){nextButton.disabled=pageIndex===pages.length-1;nextButton.setAttribute('aria-label',pageIndex===pages.length-2?'Final mesaja geç':'Sonraki fotoğraf')}
  navigator.vibrate?.(10);
 };
 const openAlbum=()=>{
  showPage(0);album.classList.add('is-open');album.setAttribute('aria-hidden','false');
  document.body.classList.add('childhood-album-open');navigator.vibrate?.([28,35,55]);
  setTimeout(()=>closeButton?.focus(),450);
 };
 const closeAlbum=()=>{
  album.classList.remove('is-open');album.setAttribute('aria-hidden','true');
  document.body.classList.remove('childhood-album-open');openButton.focus();
 };
 openButton.addEventListener('click',openAlbum);
 closeButton?.addEventListener('click',closeAlbum);
 finishButton?.addEventListener('click',closeAlbum);
 previousButton?.addEventListener('click',()=>showPage(pageIndex-1));
 nextButton?.addEventListener('click',()=>showPage(pageIndex+1));
 album.addEventListener('pointerdown',event=>{startX=event.clientX});
 album.addEventListener('pointerup',event=>{
  const distance=event.clientX-startX;
  if(Math.abs(distance)<48)return;
  showPage(pageIndex+(distance<0?1:-1));
 });
 document.addEventListener('keydown',event=>{
  if(!album.classList.contains('is-open'))return;
  if(event.key==='Escape')closeAlbum();
  if(event.key==='ArrowLeft')showPage(pageIndex-1);
  if(event.key==='ArrowRight')showPage(pageIndex+1);
 });
})();


// 01.08.2025 tarihinden itibaren canlı ilişki sayacı
(() => {
 const daysEl = document.querySelector('#loveDays');
 const hoursEl = document.querySelector('#loveHours');
 const minutesEl = document.querySelector('#loveMinutes');
 const secondsEl = document.querySelector('#loveSeconds');
 if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

 // Aylar JavaScript'te 0'dan başladığı için 7 = Ağustos.
 const metAt = new Date(2025, 7, 1, 0, 0, 0, 0);
 const pad = value => String(value).padStart(2, '0');

 const updateLoveCounter = () => {
  if (window.__loveCounterPaused) return;
  const now = new Date();
  const totalSeconds = Math.max(0, Math.floor((now.getTime() - metAt.getTime()) / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
 };

 updateLoveCounter();
 window.setInterval(updateLoveCounter, 1000);
})();


// Duygusal etkileşimler
(() => {
 const heartButton = document.querySelector('#heartPlaceButton');
 const heartOverlay = document.querySelector('#heartPlaceOverlay');
 const heartOverlayLine = document.querySelector('#heartPlaceLine');
 const heartFinale = document.querySelector('#heartPlaceFinale');
 const heartClose = document.querySelector('#heartPlaceClose');
 const heartHoldButton = document.querySelector('#heartHoldButton');
 const heartSoundToggle = document.querySelector('#heartSoundToggle');
 const vibrationCheck = document.querySelector('#vibrationCheck');
 const vibrationCheckText = document.querySelector('#vibrationCheckText');
 const vibrationTestButton = document.querySelector('#vibrationTestButton');
 const vibrationAnswer = document.querySelector('#vibrationAnswer');
 const vibrationYes = document.querySelector('#vibrationYes');
 const vibrationNo = document.querySelector('#vibrationNo');
 const vibrationHelp = document.querySelector('#vibrationHelp');
 const vibrationContinue = document.querySelector('#vibrationContinue');
 const timeButton = document.querySelector('#timeStopButton');
 const timeMessage = document.querySelector('#timeStopMessage');
 const timeLine = document.querySelector('#timeStopLine');
 const timeProgress = document.querySelector('#timeStopProgress');
 const overlay = document.querySelector('#timeFreezeOverlay');
 const overlayLine = document.querySelector('#timeFreezeLine');
 const overlayProgress = document.querySelector('#timeFreezeProgress');
 const timeResume = document.querySelector('#timeFreezeResume');
 const freezeDays = document.querySelector('#freezeDays');
 const freezeHours = document.querySelector('#freezeHours');
 const freezeMinutes = document.querySelector('#freezeMinutes');
 const freezeSeconds = document.querySelector('#freezeSeconds');
 if (!heartButton || !heartOverlay || !heartOverlayLine || !heartFinale || !heartClose || !heartHoldButton || !heartSoundToggle || !vibrationCheck || !vibrationCheckText || !vibrationTestButton || !vibrationAnswer || !vibrationYes || !vibrationNo || !vibrationHelp || !vibrationContinue || !timeButton || !timeMessage || !timeLine || !timeProgress || !overlay || !overlayLine || !overlayProgress) return;

 let heartTimers = [],heartAudioContext=null,heartbeatTimer=null,heartSoundOn=true,heartHoldStart=0,heartHoldFrame=null,heartCompleted=false,heartPausedAudio=[];
 const pauseMusicForHeart=()=>{
  heartPausedAudio=[document.querySelector('#audio'),document.querySelector('#sleepMemorySong')]
   .filter(audio=>audio&&!audio.paused&&!audio.ended);
  heartPausedAudio.forEach(audio=>audio.pause());
 };
 const resumeMusicAfterHeart=()=>{
  const audioToResume=[...heartPausedAudio];
  heartPausedAudio=[];
  audioToResume.forEach(audio=>audio.play().catch(()=>{}));
 };
 const makeHeartThump=(delay=0,volume=.12)=>{
  if(!heartSoundOn||!heartAudioContext)return;
  const start=heartAudioContext.currentTime+delay;
  const osc=heartAudioContext.createOscillator(),gain=heartAudioContext.createGain();
  osc.type='sine';osc.frequency.setValueAtTime(72,start);osc.frequency.exponentialRampToValueAtTime(42,start+.13);
  gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(volume,start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+.19);
  osc.connect(gain).connect(heartAudioContext.destination);osc.start(start);osc.stop(start+.22);
 };
 const scheduleHeartbeat=(interval=920)=>{
  window.clearTimeout(heartbeatTimer);
  const beat=()=>{
   makeHeartThump(0,.14);makeHeartThump(.19,.085);
   if(navigator.vibrate)navigator.vibrate([28,145,42]);
   heartbeatTimer=window.setTimeout(beat,interval);
  };
  beat();
 };
 const stopHeartbeat=()=>{window.clearTimeout(heartbeatTimer);heartbeatTimer=null};
 const resetVibrationCheck=()=>{
  vibrationCheck.classList.add('is-visible');
  vibrationCheckText.textContent='Aşağıdaki butona dokun. Telefonun iki kez kısa titreşmesi gerekiyor.';
  vibrationTestButton.textContent='Titreşimi Test Et';
  vibrationTestButton.hidden=false;vibrationAnswer.hidden=true;vibrationHelp.hidden=true;vibrationContinue.hidden=true;
 };
 const finishVibrationCheck=()=>{
  vibrationCheck.classList.remove('is-visible');
  scheduleHeartbeat(920);
 };
 const cancelHeartHold=()=>{
  if(heartCompleted)return;
  cancelAnimationFrame(heartHoldFrame);heartHoldFrame=null;heartHoldStart=0;
  heartHoldButton.classList.remove('is-holding');heartHoldButton.style.setProperty('--hold-progress','0');
  heartOverlayLine.textContent='Kalbime dokun ve birkaç saniye basılı tut…';
  scheduleHeartbeat(920);
 };
 const completeHeartHold=()=>{
  heartCompleted=true;cancelAnimationFrame(heartHoldFrame);heartHoldFrame=null;
  heartHoldButton.classList.remove('is-holding');heartHoldButton.classList.add('is-complete');
  heartHoldButton.style.setProperty('--hold-progress','1');
  heartOverlayLine.textContent='Kalbim seni tanıdı.';
  heartFinale.classList.add('is-visible');heartClose.classList.add('is-visible');
  scheduleHeartbeat(1080);
  if(navigator.vibrate)navigator.vibrate([70,55,110]);
 };
 const closeHeartPlace = () => {
  heartTimers.forEach(window.clearTimeout); heartTimers = [];
  stopHeartbeat();cancelAnimationFrame(heartHoldFrame);heartHoldFrame=null;
  heartOverlay.classList.remove('is-open');
  heartOverlay.setAttribute('aria-hidden','true');
  document.body.classList.remove('heart-overlay-open');
  heartFinale.classList.remove('is-visible');
  heartClose.classList.remove('is-visible');
  heartHoldButton.classList.remove('is-holding','is-complete');
  heartHoldButton.style.setProperty('--hold-progress','0');
  vibrationCheck.classList.remove('is-visible');
  heartOverlayLine.textContent='Kalbime dokun ve birkaç saniye basılı tut…';
  heartCompleted=false;
  resumeMusicAfterHeart();
 };
 heartButton.addEventListener('click', async() => {
  pauseMusicForHeart();
  heartTimers.forEach(window.clearTimeout); heartTimers = [];
  heartCompleted=false;heartHoldButton.classList.remove('is-holding','is-complete');heartHoldButton.style.setProperty('--hold-progress','0');
  heartOverlayLine.textContent='Kalbime dokun ve birkaç saniye basılı tut…';
  heartFinale.classList.remove('is-visible');
  heartClose.classList.remove('is-visible');
  heartOverlay.classList.add('is-open');
  heartOverlay.setAttribute('aria-hidden','false');
  document.body.classList.add('heart-overlay-open');
  try{heartAudioContext=heartAudioContext||new(window.AudioContext||window.webkitAudioContext)();await heartAudioContext.resume()}catch(e){heartSoundOn=false}
  heartSoundToggle.setAttribute('aria-pressed',String(heartSoundOn));
  heartSoundToggle.textContent=heartSoundOn?'♩ Kalp sesi açık':'♩ Kalp sesi kapalı';
  stopHeartbeat();resetVibrationCheck();
 });
 vibrationTestButton.addEventListener('click',()=>{
  if(typeof navigator.vibrate==='function'){
   navigator.vibrate([140,100,140]);
   vibrationCheckText.textContent='Telefon şimdi iki kez kısa titreşmiş olmalı.';
   vibrationAnswer.hidden=false;vibrationHelp.hidden=true;vibrationContinue.hidden=true;
  }else{
   vibrationCheckText.textContent='Bu telefonda veya tarayıcıda web titreşimi desteklenmiyor.';
   vibrationTestButton.hidden=true;vibrationAnswer.hidden=true;vibrationHelp.hidden=false;vibrationContinue.hidden=false;
  }
 });
 vibrationYes.addEventListener('click',finishVibrationCheck);
 vibrationNo.addEventListener('click',()=>{
  vibrationAnswer.hidden=true;vibrationHelp.hidden=false;vibrationContinue.hidden=false;
  vibrationTestButton.textContent='Tekrar Test Et';vibrationTestButton.hidden=false;
 });
 vibrationContinue.addEventListener('click',finishVibrationCheck);
 const startHeartHold=event=>{
  event.preventDefault();if(heartCompleted)return;
  if(event.pointerId!=null&&heartHoldButton.setPointerCapture){
   try{heartHoldButton.setPointerCapture(event.pointerId)}catch(e){}
  }
  heartHoldStart=performance.now();heartHoldButton.classList.add('is-holding');heartOverlayLine.textContent='Atışlarımı hisset…';
  scheduleHeartbeat(620);
  const update=now=>{
   const progress=Math.min(1,(now-heartHoldStart)/3200);
   heartHoldButton.style.setProperty('--hold-progress',String(progress));
   if(progress>=1){completeHeartHold();return}
   heartHoldFrame=requestAnimationFrame(update);
  };
  heartHoldFrame=requestAnimationFrame(update);
 };
 ['contextmenu','dragstart','selectstart'].forEach(type=>heartHoldButton.addEventListener(type,event=>event.preventDefault()));
 heartHoldButton.addEventListener('pointerdown',startHeartHold);
 ['pointerup','pointercancel'].forEach(type=>heartHoldButton.addEventListener(type,cancelHeartHold));
 heartSoundToggle.addEventListener('click',async()=>{
  heartSoundOn=!heartSoundOn;heartSoundToggle.setAttribute('aria-pressed',String(heartSoundOn));
  heartSoundToggle.textContent=heartSoundOn?'♩ Kalp sesi açık':'♩ Kalp sesi kapalı';
  if(heartSoundOn){try{await heartAudioContext?.resume()}catch(e){}scheduleHeartbeat(heartHoldButton.classList.contains('is-holding')?620:920)}
  else stopHeartbeat();
 });
 heartClose.addEventListener('click', closeHeartPlace);


 const lines = [
  'Eğer elimde olsaydı...',
  'Seninle mutlu olduğum anları...',
  'Biraz daha uzun yaşayabilmek için...',
  'Zamanı durdururdum.',
  'Ama zaman durmuyor...',
  'Neyse ki anılarımız kalıyor. 💙',
  'Her saniye seni biraz daha çok seviyorum...'
 ];
 let running = false;
 let timers = [];

 const later = (fn, delay) => {
  const id = window.setTimeout(fn, delay);
  timers.push(id);
  return id;
 };

 const copyFrozenCounter = () => {
  freezeDays.textContent = document.querySelector('#loveDays')?.textContent || '0';
  freezeHours.textContent = document.querySelector('#loveHours')?.textContent || '00';
  freezeMinutes.textContent = document.querySelector('#loveMinutes')?.textContent || '00';
  freezeSeconds.textContent = document.querySelector('#loveSeconds')?.textContent || '00';
 };

 const closeTimeScene = () => {
  timers.forEach(window.clearTimeout);
  timers = [];
  window.__loveCounterPaused = false;
  document.body.classList.remove('time-is-frozen', 'time-overlay-open');
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  timeButton.disabled = false;
  timeButton.innerHTML = '<span>⌛</span> Bir daha durdur';
  running = false;
  timeMessage.classList.remove('is-open');
  timeMessage.setAttribute('aria-hidden', 'true');
 };
 timeResume?.addEventListener('click', closeTimeScene);

 timeButton.addEventListener('click', () => {
  if (running) return;
  running = true;
  timers = [];
  copyFrozenCounter();
  window.__loveCounterPaused = true;
  document.body.classList.add('time-is-frozen', 'time-overlay-open');
  timeButton.disabled = true;
  timeButton.innerHTML = '<span>⌛</span> Zaman durdu';

  // Tek sahne kullan: mobilde alttaki kart mesajı ile üst üste binmesin.
  timeMessage.classList.remove('is-open');
  timeMessage.setAttribute('aria-hidden', 'true');
  timeLine.textContent = '';

  overlayLine.textContent = lines[0];
  overlayLine.classList.remove('is-changing');
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');

  overlayProgress.style.transition = 'none';
  overlayProgress.style.width = '0';
  void overlayProgress.offsetWidth;
  overlayProgress.style.transition = 'width 10.15s linear';
  overlayProgress.style.width = '100%';

  if (navigator.vibrate) navigator.vibrate([45, 40, 70]);

  const lineDelay = 1450;
  lines.slice(1).forEach((line, index) => {
   later(() => {
    overlayLine.classList.add('is-changing');
    later(() => {
     overlayLine.textContent = line;
     overlayLine.classList.remove('is-changing');
    }, 320);
   }, (index + 1) * lineDelay);
  });

  later(() => {
   closeTimeScene();
  }, (lines.length * lineDelay) + 900);
 });
})();


// Kaset video mesajı
(() => {
 const overlay=document.getElementById('cassetteOverlay');
 const experience=document.getElementById('cassettePlayer');
 const video=document.getElementById('cassetteVideo');
 const play=document.getElementById('cassettePlay');
 const insert=document.getElementById('cassetteInsert');
 const back=document.getElementById('cassetteBack');
 const forward=document.getElementById('cassetteForward');
 const close=document.getElementById('cassetteClose');
 const next=document.getElementById('cassetteNext');
 const shade=document.getElementById('cassetteShade');
 const shadeIcon=document.getElementById('cassetteShadeIcon');
 const shadeTitle=document.getElementById('cassetteShadeTitle');
 const shadeText=document.getElementById('cassetteShadeText');
 const finalScreen=document.getElementById('finalScreen');
 if(!overlay||!experience||!video||!play||!insert||!finalScreen)return;
 let inserted=false;
 let loaded=false;
 let sourceLoaded=false;
 const mediaButtons=[back,play,forward,next];
 const setEnabled=(state)=>mediaButtons.forEach(btn=>{ if(btn) btn.disabled=!state; });
 const setShade=(icon,title,text)=>{ if(shadeIcon) shadeIcon.textContent=icon; if(shadeTitle) shadeTitle.textContent=title; if(shadeText) shadeText.textContent=text; };
 const sync=()=>{
   const on=!video.paused&&!video.ended;
   experience.classList.toggle('is-playing',on);
   play.textContent=on?'⏸ Duraklat':'▶ Oynat';
 };
 const ensureSource=()=>{
   if(sourceLoaded) return;
   const src=video.dataset.src;
   if(src){
     video.innerHTML='<source src="'+src+'" type="video/mp4">';
     video.load();
     sourceLoaded=true;
   }
 };
 const finishBoot=()=>{
   experience.classList.remove('is-booting');
   experience.classList.add('is-loaded','is-inserted');
   loaded=true;
   setEnabled(true);
   setShade('▣','Şimdi beni dinle','Kaset hazır. Video oynuyor…');
   video.currentTime=0;
   video.play().catch(()=>{});
 };
 const insertCassette=()=>{
   if(inserted) return;
   inserted=true;
   setShade('⬆','Kaset televizyona takılıyor…','Bir saniye bekle, önce kaset yerine otursun.');
   experience.classList.add('is-inserting');
   insert.disabled=true;
   insert.textContent='Kaset Takılıyor...';
   setEnabled(false);
   setTimeout(()=>{
     ensureSource();
     experience.classList.remove('is-inserting');
     experience.classList.add('is-booting');
     setShade('◌','Video hazırlanıyor…','Kaset takıldı. Şimdi ekran açılıyor.');
     setTimeout(finishBoot, 820);
   }, 1280);
 };
 const toggle=()=>{
   if(!inserted){ insertCassette(); return; }
   if(video.paused||video.ended) video.play().catch(()=>{}); else video.pause();
 };
 const reset=()=>{
   video.pause();
   try{ video.currentTime=0; }catch(e){}
   inserted=false; loaded=false;
   setEnabled(false);
   experience.classList.remove('is-inserting','is-inserted','is-playing','is-booting','is-loaded');
   insert.disabled=false;
   insert.textContent="Kaseti TV'ye Tak";
   play.textContent='▶ Oynat';
   setShade('▣','Kaseti takınca video başlayacak','Gerçekten tak ve beni dinle.');
   document.body.classList.remove('cassette-open');
 };
 setEnabled(false);
 insert.addEventListener('click',insertCassette);
 play.addEventListener('click',toggle);
 shade?.addEventListener('click',()=>{ if(!inserted) insertCassette(); });
 back?.addEventListener('click',()=>{ if(loaded) video.currentTime=Math.max(0,video.currentTime-10); });
 forward?.addEventListener('click',()=>{ if(loaded) video.currentTime=Math.min(video.duration||Infinity,video.currentTime+10); });
 video.addEventListener('play',sync);
 video.addEventListener('pause',sync);
 video.addEventListener('ended',sync);
 close?.addEventListener('click',()=>{overlay.classList.remove('show');overlay.setAttribute('aria-hidden','true');document.body.style.overflow='';reset();});
 next?.addEventListener('click',()=>{overlay.classList.remove('show');overlay.setAttribute('aria-hidden','true');document.body.style.overflow='';reset();finalScreen.classList.add('show')});
})();
