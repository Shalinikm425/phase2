this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('mycache').then(function(ca){
      ca.addAll([
        '/index.html',
        '/css/index.css',
        '/form.html',
        '/resume.html',
        '/css/dynamic.css',
        '/css/form.css'


      ])
    })
  )
})
// fetch addEventListener
this.addEventListener('fetch',function(event){
  event.respondWith(caches.open('my cache')
.then(function(cache){
  return cache.match(event.request)
  .then(function(result){
    return result || fetch(event.request)
    .then(function(result){
      cache.put(event.request,result.clone());
      return result;
    })
  })
}))
})
