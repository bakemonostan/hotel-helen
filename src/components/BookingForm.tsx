"use client";

import { motion } from "motion/react";
import { Calendar, Users, Bed, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function BookingForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full max-w-sm sm:max-w-md">
      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl sm:text-2xl text-gray-800 font-bold">
            Check Availability
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 sm:space-y-5">
          {/* Check-in Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Calendar size={16} />
              CHECK-IN
            </Label>
            <Input
              type="date"
              className="w-full border-gray-200 focus:border-amber-600 focus:ring-amber-600/20"
              defaultValue="2024-05-28"
            />
          </motion.div>

          {/* Check-out Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Calendar size={16} />
              CHECK-OUT
            </Label>
            <Input
              type="date"
              className="w-full border-gray-200 focus:border-amber-600 focus:ring-amber-600/20"
              defaultValue="2024-05-30"
            />
          </motion.div>

          {/* Rooms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Bed size={16} />
              ROOMS
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-full border-gray-200 focus:border-amber-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Room</SelectItem>
                <SelectItem value="2">2 Rooms</SelectItem>
                <SelectItem value="3">3 Rooms</SelectItem>
                <SelectItem value="4">4 Rooms</SelectItem>
                <SelectItem value="5">5+ Rooms</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Guests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Users size={16} />
              GUESTS
            </Label>
            <Select defaultValue="2">
              <SelectTrigger className="w-full border-gray-200 focus:border-amber-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Adult</SelectItem>
                <SelectItem value="2">2 Adults</SelectItem>
                <SelectItem value="3">3 Adults</SelectItem>
                <SelectItem value="4">4 Adults</SelectItem>
                <SelectItem value="5">5+ Adults</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="pt-4">
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 sm:py-6 text-base sm:text-lg font-semibold group transition-all duration-300 transform hover:scale-105">
              Check Availability
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
