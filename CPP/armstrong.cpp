#include <iostream>
using namespace std;

int main()
{
    int num, sum = 0, rem, original;
    
    cout<<"Enter the number: ";
    cin>>num;
    original = num;

    while(num > 0)
    {
        rem = num % 10;
        sum += rem * rem * rem;
        num = num / 10;
    }

    if(original == sum)
    {
        cout<<"Number is Armstrong";
    }
    else
    {
        cout<<"Number is not Armstrong";
    }

}