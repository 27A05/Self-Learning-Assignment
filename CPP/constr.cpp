// Q. Write a student class and use it in your program. Store the data of 10 students and display the data according to their roll numbers, dates of birth, and total marks.

// Implement concepts such as : 
// -Classes and Objects
// -Constructors
// -Parameterized constructors

#include <iostream>
using namespace std;

class student
{
    private:
    int roll_no, day, month, year, marks;
    public:
        void accept()
        {
            cout<<"enter the roll:";
            cin>>roll_no;
            cout<<"Enter the DOB:";
            cin>>day>>month>>year;
            cout<<"Enter the marks:";
            cin>>marks;
        }
        void display()
        {
            cout<<"Roll no:"<<roll_no<<"\n"<<"DOB:"<<day<<"/"<<month<<"/"<<year<<"\n"<<"Marks:"<<marks<<endl;
        }
};

    int main()
    {
        int i,j;
        student s1;
        for(i = 1; i <= 10; i++)
        {
            s1.accept();
        }
        
        for(j = 1; j <= 10; j++)
        {
            s1.display();
        }

        return 0;
    }
