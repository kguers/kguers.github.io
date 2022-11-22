const button = document.getElementById('dropdown');
const sidebar = document.getElementById('sidenav');
let dropdownToggle = false;

const dropdown = () => {
    if(!dropdownToggle){
        button.style.marginRight = '16.5rem';
        sidebar.style.display = 'block';
        dropdownToggle = !dropdownToggle;
    }
    else {
        button.style.marginRight = '1.5rem';
        sidebar.style.display = "none";
        dropdownToggle = !dropdownToggle;
    }
}

button.onclick = dropdown;