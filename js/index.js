let n;
const arr = [];

const container = document.getElementById("container");
const containerWidth = parseInt(container.clientWidth);

function createArray()
{
    n = parseInt(document.getElementById("arraySizeSlider").value);

    for( let i = 0 ; i < n ; i++)
    {
        arr[i] = Math.random();
    }
    displayBars();
}

function displayBars()
{
    container.innerHTML = "";

    for( let i = 0 ; i < n ; i++ )
    {
        const bar = document.createElement("div");

        bar.style.height = arr[i]*100 + "%";
        bar.style.width = containerWidth/n + "%";

        bar.id = "bar" + i;
        bar.classList.add("bar");

        container.appendChild(bar);
    }
}

async function animateSwap(i , j)
{

    setTimeout(function(){

        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        displayBars();

    }, 50)

}

async function bubbleSort()
{
    for (let i = 0; i < n - 1; i++)
    {
        var j;
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                await animateSwap(j , j+1);
            }
        }
    }
    displayBars();
}
