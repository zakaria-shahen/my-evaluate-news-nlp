function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("name").value;
    Client.checkForName(formText);

    console.log("::: Form Submitted :::");
    fetch(`http://localhost:8081/test?url=${formText}`)
        .then((res) => res.json())
        .then((res) => {
            const results = document.querySelector("#results")

            if (res.status.msg === "OK") {
                const fragment = document.createDocumentFragment()
                const viewList = ["agreement", "confidence", "irony", "score_tag"]
                viewList.map(key => {
                    const p = document.createElement('p')
                    p.innerHTML = `<strong>${key}:</strong> ${res[key]}`
                    fragment.appendChild(p)
                })
                console.log(res)
                results.innerHTML = ''
                results.appendChild(fragment);
                return fragment
            }

            alert(res.status.msg)
        });
}

export { handleSubmit };
