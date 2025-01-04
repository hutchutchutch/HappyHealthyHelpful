"use client";

import { DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function StepOne() {
  return (
    <div className="space-y-6">
      <div>
        <DialogTitle className="text-xl font-semibold">
          Understand the Pillars
        </DialogTitle>
        <DialogDescription className="text-white/70">
          Taking simple ideas seriously, in a format that makes it easy
        </DialogDescription>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-[20px] bg-blue-500/20 border border-blue-500 min-w-[250px] max-w-[400px] w-full">
          <h3 className="font-semibold text-blue-500 mb-2">Happy</h3>
          <p className="text-sm text-white/70">
            Activities that bring joy, meaning and connection to your life. These fuel your emotional wellbeing and help you thrive.
          </p>
        </div>

        <div className="p-4 rounded-[20px] bg-green-500/20 border border-green-500 min-w-[250px] max-w-[400px] w-full">
          <h3 className="font-semibold text-green-500 mb-2">Healthy</h3>
          <p className="text-sm text-white/70">
            Habits that support your physical and mental health. A strong foundation enables everything else.
          </p>
        </div>

        <div className="p-4 rounded-[20px] bg-purple-500/20 border border-purple-500 min-w-[250px] max-w-[400px] w-full">
          <h3 className="font-semibold text-purple-500 mb-2">Helpful</h3>
          <p className="text-sm text-white/70">
            Ways you contribute to others and make a positive impact. Giving creates purpose and deepens relationships.
          </p>
        </div>

        <div className="p-4 rounded-[20px] bg-gray-500/20 border border-gray-500 min-w-[250px] max-w-[400px] w-full">
          <h3 className="font-semibold text-gray-500 mb-2">Other</h3>
          <p className="text-sm text-white/70">
            Distractions, impulses and unfulfilling tasks that lead to lethargy and disconnection.
            <br /><br />
            <span className="font-bold">we don't <i>shame</i> these activities/categories, we just minimize them 🙂</span>
          </p>
        </div>
      </div>
    </div>
  );
}