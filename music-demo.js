// Görünür playlist kaldırıldı. Bu küçük denetleyici yalnızca sahnelere bağlı
// müzikleri (uyku sahnesi ve mumlar üflendikten sonraki akış) çalıştırır.
(()=>{
 const player=document.querySelector('#audio');
 if(!player)return;

 const sceneTracks={
  0:'assets/its-snowing-best-part.mp3',
  1:'assets/sana-dair.mp3',
  3:'assets/sera-savas-boyle-kalma.mp3'
 };
 let activeTrack=0,fadeToken=0,continueToGiftSong=false,savedBeforeSleep=null;
 const nowPlaying=document.querySelector('#nowPlaying');
 const nowPlayingCover=document.querySelector('#nowPlayingCover');
 const nowPlayingTitle=document.querySelector('#nowPlayingTitle');
 const nowPlayingArtist=document.querySelector('#nowPlayingArtist');
 const lovesong=document.querySelector('#sleepMemorySong');
 const trackInfo={
  'adele-lovesong.mp3':{title:'Lovesong',artist:'Adele',cover:'https://i.ytimg.com/vi/0wPhbmeNSOs/hqdefault.jpg'},
  'its-snowing-best-part.mp3':{title:"It's Snowing Like It's the End of the World",artist:'Krobak',cover:'https://i.ytimg.com/vi/HGBy6RFJK6c/hqdefault.jpg'},
  'sana-dair.mp3':{title:'Doğum Günü',artist:'Melek Mosso',cover:'https://i.ytimg.com/vi/rHbNUn2D3jc/hqdefault.jpg'},
  'sera-savas-boyle-kalma.mp3':{title:'Böyle Kalma',artist:'Sera Savaş',cover:'https://i.ytimg.com/vi/D7W2PjLxFBI/hqdefault.jpg'},
  'mfo-sari-laleler.mp3':{title:'Sarı Laleler',artist:'MFÖ',cover:'https://i.ytimg.com/vi/8Jqe_2fUND0/hqdefault.jpg'}
 };

 const fileName=media=>decodeURI((media.currentSrc||media.src||'').split('/').pop().split('?')[0]);
 const showNowPlaying=media=>{
  const info=trackInfo[fileName(media)];
  if(!info||!nowPlaying)return;
  nowPlayingTitle.textContent=info.title;
  nowPlayingArtist.textContent=info.artist;
  nowPlayingCover.src=info.cover;
  nowPlayingCover.alt=`${info.artist} - ${info.title} kapak görseli`;
  nowPlaying.hidden=false;
  nowPlaying.classList.toggle('is-paused',media.paused);
 };
 [player,lovesong].filter(Boolean).forEach(media=>{
  media.addEventListener('play',()=>showNowPlaying(media));
  media.addEventListener('pause',()=>{
   if(!player.paused)showNowPlaying(player);
   else if(lovesong&&!lovesong.paused)showNowPlaying(lovesong);
   else nowPlaying?.classList.add('is-paused');
  });
  media.addEventListener('ended',()=>nowPlaying?.classList.add('is-paused'));
 });
 if(lovesong&&!lovesong.paused)showNowPlaying(lovesong);

 const fadeTo=(target,duration=700)=>{
  fadeToken++;
  const token=fadeToken,start=player.volume,started=performance.now();
  const step=now=>{
   if(token!==fadeToken)return;
   const progress=Math.min(1,(now-started)/duration);
   player.volume=start+(target-start)*progress;
   if(progress<1)requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
 };

 const playTrack=(track,time=0,volume=.82)=>{
  const source=sceneTracks[track];
  if(!source)return;
  activeTrack=track;
  player.loop=track===0;
  player.src=source;
  player.load();
  const start=()=>{
   player.currentTime=Math.max(0,Math.min(time,(player.duration||time+1)-.2));
   player.volume=0;
  player.play().then(()=>fadeTo(volume,900)).catch(()=>{});
   player.removeEventListener('loadedmetadata',start);
  };
  if(player.readyState>=1)start();
  else player.addEventListener('loadedmetadata',start);
 };

 player.addEventListener('timeupdate',()=>{
  if(continueToGiftSong&&activeTrack===1&&player.currentTime>=73){
   continueToGiftSong=false;
   playTrack(3,0,.82);
  }
 });

 window.YOGMusic={
  playTrack,
  playSleepTrack(){
   if(activeTrack!==0&&player.currentSrc){
    savedBeforeSleep={track:activeTrack,time:player.currentTime,volume:player.volume||.82};
   }
   playTrack(0,0,.68);
  },
  resumeBeforeSleep(){
   if(!savedBeforeSleep)return;
   const saved=savedBeforeSleep;
   savedBeforeSleep=null;
   playTrack(saved.track,saved.time,saved.volume);
  },
  cuePeak(){
   player.pause();
   continueToGiftSong=true;
   setTimeout(()=>playTrack(1,55,.82),480);
  },
  lower(){fadeTo(.34,650)},
  restore(){fadeTo(.82,850)},
  playSecond(){playTrack(1,0,.76)}
 };
})();
