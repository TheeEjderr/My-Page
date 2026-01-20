const brithDate = new Date(2008, 12, 4, 12, 0, 0);

function updateAge()
{
    const now = new Date();
    const diffInMs = now - brithDate;

    const msInYear = 1000 * 60 * 60 * 24 * 365.242199;

    const age = diffInMs / msInYear;

    document.getElementById('age').innerText ="My age is " + age.toFixed(15);

}

setInterval(updateAge, 50);