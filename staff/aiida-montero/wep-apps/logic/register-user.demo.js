registerUser('Aida', 'aida@mail.com', '123', '123', function(error){
    if(!error)console.log('ok, perfect, user registered!,)')
    else console.error('ERROR!' + error.message)
})