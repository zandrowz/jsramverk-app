const docsModel = {
    baseUrl: window.location.href.includes("localhost") ?
        "http://localhost:1337" :
        "https://jsramverk-editor-sakq21.azurewebsites.net",
    getAllDocs: async function getAllDocs() {
        const response = await fetch(`${docsModel.baseUrl}/docs`);

        const docs = await response.json();

        return docs.data;
    },
    createDoc: async function createDoc(newDoc) {
        const response = await fetch(`${docsModel.baseUrl}/docs`, {
            body: JSON.stringify(newDoc),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });

        const result = await response.json();

        console.log(result);
    },
    updateDoc: async function updateDoc(newDoc) {
        const response = await fetch(`${docsModel.baseUrl}/docs`, {
            body: JSON.stringify(newDoc),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        });

        //const result = await response.json();

        console.log(response);
        return "";
    },
    resetDocs: async function resetDocs() {
        const response = await fetch(`${docsModel.baseUrl}/docs`);

        const result = await response.json();

        return result.data;
    },
};

export default docsModel;
