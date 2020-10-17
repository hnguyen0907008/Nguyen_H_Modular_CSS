(() => {
    //make AJAX req using fetch
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {
            debugger;
            console.log(data);
        //handleData
        //now call the function that put the pieces on the page
            let profPanel = document.querySelector(".profPanelText").textContent,
                profContent = profPanel.children;

                profContent[1].textContent = data.coursename;
                profContent[2].textContent = data.coursecode;
                profContent[3].textContent = data.profname;

        //add to the view;
                profPanel.appendChild(profContent);
           
        })
        .catch((err) => {
            console.log("Error!");
        })
})();