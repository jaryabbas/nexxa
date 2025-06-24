import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Gauge } from "lucide-react";

export default function AcademeterDashboard() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-6 space-y-6">
      {/* Header */}
      <div className="text-3xl font-bold">Academeter</div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Academic Performance */}
        <Card className="bg-[#2b2b2b]">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Academic Performance</h2>
            <p className="text-sm text-gray-400 mb-4">Semester-wise exam scores</p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm"> <span>Sem 1</span> <span>78%</span> </div>
                <Progress value={78} />
              </div>
              <div>
                <div className="flex justify-between text-sm"> <span>Sem 2</span> <span>84%</span> </div>
                <Progress value={84} />
              </div>
              <div>
                <div className="flex justify-between text-sm"> <span>Sem 3</span> <span>72%</span> </div>
                <Progress value={72} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Meter */}
        <Card className="bg-[#2b2b2b] flex items-center justify-center">
          <CardContent className="p-4 text-center">
            <Gauge className="mx-auto h-16 w-16 text-green-400" />
            <div className="text-2xl font-bold mt-2">92%</div>
            <div className="text-sm text-gray-400">Attendance</div>
          </CardContent>
        </Card>

        {/* Topics To Learn */}
        <Card className="bg-[#2b2b2b]">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Today's Lessons</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Math: Probability</li>
              <li>Science: Human Digestive System</li>
              <li>English: Poetry - The Road Not Taken</li>
            </ul>
          </CardContent>
        </Card>

        {/* Teacher Shared Topics */}
        <Card className="bg-[#2b2b2b]">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Teacher Shared Topics</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Review Calculus basics (Math)</li>
              <li>Prepare slides on Cell Division (Bio)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Weak Areas */}
        <Card className="bg-[#2b2b2b]">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Improvement Areas</h2>
            <ul className="list-disc list-inside text-sm space-y-1 text-red-400">
              <li>English Grammar Practice</li>
              <li>Algebra Concepts</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
