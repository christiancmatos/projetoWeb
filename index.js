// carregar imagens dos álbuns
function uploadImages() {
    
    let images = document.querySelectorAll('img');

    images.forEach((item, index)=>{
    item.src = informations[index].img
    })
 
}

uploadImages()

//abrir e preencher informções do modal
function fillModal(clicked_id) {

    document.querySelector('.modal').style.display = 'flex'    

    let key = clicked_id

    let nameAlbum = document.querySelector('.album-name')
    nameAlbum.innerHTML = informations[key].nameAlbum

    let albumYear = document.querySelector('.album-year')
    albumYear.innerHTML = informations[key].year

    for (let music in informations[key].musics) {
        
        let selectDiv = document.querySelector('.album-musics')
        let addMusic = document.createElement('h5')
        selectDiv.appendChild(addMusic);

        if (music < 9) {
            addMusic.innerHTML = `0${parseInt(music) + 1}. ${informations[key].musics[music]}`
        } else {
            addMusic.innerHTML = `${parseInt(music) + 1}. ${informations[key].musics[music]}`
        }
        
    }

    let listenAlbum = document.querySelector('.link-album')
    listenAlbum.href = informations[key].urlAlbum

}

//fechar o modal e limpar o campo de musicas
function closeModal() {
 
    document.querySelector('.modal').style.display = 'none';

    let clearFields = document.querySelector(".album-musics")
    clearFields.innerHTML = ""

}