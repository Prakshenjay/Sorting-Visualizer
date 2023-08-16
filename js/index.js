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
    dispalyBars();
}

function dispalyBars()
{
    container.innerHTML = "";

    for( let i = 0 ; i < n ; i++ )
    {
        const bar = document.createElement("div");

        bar.style.height = arr[i]*100 + "%";
        bar.style.width = containerWidth/n + "%";

        bar.classList.add("bar");

        container.appendChild(bar);
    }
}

function bubbleSort()
{
    const swaps = [];
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaps.push([j,j+1]);

            }
        }
    }
    dispalyBars();
}
