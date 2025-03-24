let dish = [
    { name: "Rau sạch", category: "Đồ ăn" },
    { name: "Thịt lợn", category: "Đồ ăn" },
    { name: "Pepsi không calo", category: "Nước" },
    { name: "Cocacola", category: "Nước" },
    { name: "Cờ lê", category: "Dụng cụ" },
    { name: "Tuy vít", category: "Dụng cụ" },
];

let search = document.getElementById("search");
let check = document.getElementById("loc");
let list = document.getElementById("list");

function updateList(categorySearch = "all") {
    list.innerHTML = "";
    let add = "";

    function filterDish(n) {
        if (categorySearch === "all" || n.category === categorySearch) {
            add += `<li><b>Tên đồ ăn: </b>${n.name} - <b>Danh mục: </b>${n.category}</li>`;
        }
    }
    dish.forEach(filterDish); 
    list.innerHTML = add || "<li>Không có kết quả.</li>";
}
updateList();
check.addEventListener("click", function () {
    let categorySearch = search.value;
    updateList(categorySearch);
});