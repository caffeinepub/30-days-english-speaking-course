import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Loader2 } from "lucide-react";
import { useState } from "react";

interface ProfileSetupModalProps {
  onSave: (name: string) => Promise<void>;
  isSaving: boolean;
}

export default function ProfileSetupModal({
  onSave,
  isSaving,
}: ProfileSetupModalProps) {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    await onSave(name.trim());
  };

  return (
    <Dialog open>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-sm">
              <GraduationCap size={28} className="text-primary-foreground" />
            </div>
          </div>
          <DialogTitle className="font-display text-xl text-center">
            Welcome to Speak30!
          </DialogTitle>
          <DialogDescription className="text-center font-body">
            What should we call you? Your name helps us personalize your
            learning journey.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="display-name" className="font-body font-600">
              Your name
            </Label>
            <Input
              id="display-name"
              placeholder="e.g. Maria, John, Anh..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="font-body"
              autoFocus
            />
          </div>
          <Button
            type="submit"
            className="w-full font-body font-600"
            disabled={!name.trim() || isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 size={16} className="mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              "Start Learning 🚀"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
