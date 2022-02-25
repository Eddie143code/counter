let count = 0;

const counter = document.querySelector("#counter");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", function()
{
    count--;
    counter.textContent = count;
});

reset.addEventListener("click", function()
{
    count = 0;
    counter.textContent = count;
});

increase.addEventListener("click", function()
{
    count++;
    counter.textContent = count;
})