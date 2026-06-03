import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";

export default function ProfileDashboard() {
  const [bio, setBio] = useState(
    "Frontend Developer | React Enthusiast"
  );

  return (
    <TooltipProvider>
      <Card className="max-w-xl mx-auto mt-10">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>

            <div>
              <CardTitle>Specter</CardTitle>
              <CardDescription>
                Personal Dashboard
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex gap-2 mb-4">
            <Badge>React</Badge>
            <Badge variant="secondary">Vite</Badge>
            <Badge variant="outline">Tailwind</Badge>
          </div>

          <Separator className="my-4" />

          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">
                Profile
              </TabsTrigger>

              <TabsTrigger value="settings">
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="space-y-3 mt-4">
                <Input placeholder="Username" />
                <Textarea
                  value={bio}
                  onChange={(e) =>
                    setBio(e.target.value)
                  }
                />
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="mt-4 text-sm text-muted-foreground">
                Account preferences and options.
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-between">
          {/* Sheet */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                Open Sheet
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  Notifications
                </SheetTitle>
              </SheetHeader>

              <div className="mt-4">
                This is a side panel using Sheet.
              </div>
            </SheetContent>
          </Sheet>

          {/* Dialog */}

          <Dialog>
            <DialogTrigger asChild>
              <Button>Save</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Confirm Changes
                </DialogTitle>
              </DialogHeader>

              <p>
                Are you sure you want to save
                your profile?
              </p>

              <Button className="mt-4">
                Confirm
              </Button>
            </DialogContent>
          </Dialog>

          {/* Tooltip */}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">
                ?
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>Edit your profile here</p>
            </TooltipContent>
          </Tooltip>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}