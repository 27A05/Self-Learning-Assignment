// 2) Understande and write nested call back function (as shown in lecture)

console.log("In File: ");

function Step1(callback)
{
    setTimeout(() =>
    {
        console.log("Step 1 Completed");
        callback();
    }, 1000);
}

function Step2(callback)
{
    setTimeout(() =>
    {
        console.log("Step 2 Completed");
        callback();
    }, 2000);
}

function Step3(callback)
{
    setTimeout(() =>
    {
        console.log("Step 3 Completed");
        callback();
    }, 3000);
}

Step1(() => {
    Step2(() => {
        Step3(() => {
            console.log("All Steps Completed");
            });
        });
    });