#include <iostream>
using namespace std;

class Complex
{
    private:
        int real, img;

    public:
        Complex(int r, int i)   // Constructor
        {
            real = r;
            img = i;
        }

        void show()  //function show
        {
            cout<<"Real number:"<<
            real<<endl;
            cout<<"Imaginary number:"<<
            img<<endl;
        }

        void display()  //display function
        {
            cout<<"Complex number is: "<<real<<"+"<<img<<"i"<<endl;
        }
};

int main()
{
    Complex c1(10, 20); //parameterized Constructor
    c1.show();
    c1.display();

    return 0;

}