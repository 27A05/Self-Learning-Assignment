#include <iostream>
using namespace std;

class Student
{
    int roll;
    string name;

    public:
        Student()
        {
            roll=1;
            name="ABC";
            cout<<"Default Constructor is Called"<<endl;
        }

        Student(int r, string n)
        {
            roll=r;
            name=n;
            cout<<"Parameterized Constructor is Called"<<endl;
        }

        void display()
        {
            cout<<"Roll no: "<<roll<<"\n"<<"Name: "<<name<<endl;
        }

        ~Student()
        {
            cout<<"Destructor is Called"<<name<<endl;
        }
};

int main()
{
    Student s1;
    s1.display();

    Student s2(101, "Aaron");
    s2.display();

}