import { LineChart as LChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 101, name: "John", math: 85, physics: 78, chemistry: 90 },
        { id: 102, name: "Alice", math: 72, physics: 65, chemistry: 80 },
        { id: 103, name: "Bob", math: 90, physics: 85, chemistry: 88 },
        { id: 104, name: "Emily", math: 68, physics: 72, chemistry: 75 },
        { id: 105, name: "Michael", math: 78, physics: 80, chemistry: 82 },
        { id: 106, name: "Sophia", math: 95, physics: 88, chemistry: 92 },
        { id: 107, name: "David", math: 63, physics: 70, chemistry: 68 },
        { id: 108, name: "Emma", math: 82, physics: 75, chemistry: 80 },
        { id: 109, name: "William", math: 88, physics: 82, chemistry: 85 },
        { id: 110, name: "Olivia", math: 75, physics: 68, chemistry: 72 }
      ];
    return (
        <div className='max-w-[700px] h-96 mx-auto'> 
        <h2 className='my-4 font-semibold text-3xl'>Student Exam marks</h2>
            <ResponsiveContainer>
                <LChart data={studentData}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Line type={'monotone'} dataKey="physics" />
                    <Tooltip></Tooltip>
                </LChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;