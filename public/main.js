
//information  to datamuse url
const dataMuseUrl='api.datamuse.com/words?';
//type of data we want to get here it is rhymings words.
const queryParam='rel_rhy=';

//Accessing html componenet;

const inputField=document.getElementById('input');
const submit = document.getElementById('submit');
const responseField= document.getElementById('responseField');


const getSuggestion=()=>{

const wordQuery=inputField.value; 

const endpoint=`${dataMuseUrl}${queryParam}${wordQuery}`;

const xhr = new XMLHttpRequest();
xhr.responseType='json';

xhr.onreadystatechange=()=>{

    if(xhr.readyState===XMLHttpRequest){
    
        (xhr.response);



    }
 }

    xhr.open('GET',endpoint);
    xhr.send();
    alert("hello");

}


const displaySuggestion=(event)=>{
 
        event.preventDefault();
    
    while(responseField.firstChild){
 
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestion();

}


    submit.addEventListener('click',displaySuggestion);