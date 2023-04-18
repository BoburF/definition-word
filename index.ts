import axios from "axios";

const apiWord = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const getWordDefinition = async (word: string) => {
    axios.request({url: apiWord + word}).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

getWordDefinition("accomplishment")