import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type LoginMethod = "mobile" | "email" | "facebook";

export interface StudentProfile {
  name: string;
  identifier: string; // phone, email, or FB handle
  method: LoginMethod;
  passwordHash: string; // btoa(identifier + "|" + password)
  avatar: string; // e.g. "avatar-1" through "avatar-8"
  grade: string; // optional, e.g. "Class 10" or ""
  otpVerified: boolean;
  createdAt: string; // ISO timestamp
}

interface StudentAuthContext {
  student: StudentProfile | null;
  isLoggedIn: boolean;
  register: (profile: StudentProfile) => void;
  login: (identifier: string, passwordHash: string) => boolean;
  logout: () => void;
  getAllProfiles: () => StudentProfile[];
  isRegistered: (identifier: string) => boolean;
}

const STUDENTS_KEY = "tlh_students";
const SESSION_KEY = "tlh_student_session";

function loadStudents(): StudentProfile[] {
  try {
    const raw = localStorage.getItem(STUDENTS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as StudentProfile[];
  } catch {
    return [];
  }
}

function saveStudents(profiles: StudentProfile[]): void {
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(profiles));
}

function loadSession(): StudentProfile | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StudentProfile;
  } catch {
    return null;
  }
}

function saveSession(profile: StudentProfile): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(profile));
}

function clearSession(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function hashPassword(identifier: string, password: string): string {
  return btoa(unescape(encodeURIComponent(`${identifier}|${password}`)));
}

const StudentAuthReactContext = createContext<StudentAuthContext | undefined>(
  undefined,
);

export function StudentAuthProvider({ children }: { children: ReactNode }) {
  const [student, setStudent] = useState<StudentProfile | null>(loadSession);

  const register = useCallback((profile: StudentProfile) => {
    const profiles = loadStudents();
    const existing = profiles.findIndex(
      (p) => p.identifier === profile.identifier,
    );
    if (existing >= 0) {
      profiles[existing] = profile;
    } else {
      profiles.push(profile);
    }
    saveStudents(profiles);
    saveSession(profile);
    setStudent(profile);
  }, []);

  const login = useCallback(
    (identifier: string, passwordHash: string): boolean => {
      const profiles = loadStudents();
      const found = profiles.find(
        (p) => p.identifier === identifier && p.passwordHash === passwordHash,
      );
      if (found) {
        saveSession(found);
        setStudent(found);
        return true;
      }
      return false;
    },
    [],
  );

  const logout = useCallback(() => {
    clearSession();
    setStudent(null);
  }, []);

  const getAllProfiles = useCallback((): StudentProfile[] => {
    return loadStudents();
  }, []);

  const isRegistered = useCallback((identifier: string): boolean => {
    const profiles = loadStudents();
    return profiles.some((p) => p.identifier === identifier);
  }, []);

  const value = useMemo<StudentAuthContext>(
    () => ({
      student,
      isLoggedIn: student !== null,
      register,
      login,
      logout,
      getAllProfiles,
      isRegistered,
    }),
    [student, register, login, logout, getAllProfiles, isRegistered],
  );

  return (
    <StudentAuthReactContext.Provider value={value}>
      {children}
    </StudentAuthReactContext.Provider>
  );
}

export function useStudentAuth(): StudentAuthContext {
  const ctx = useContext(StudentAuthReactContext);
  if (!ctx) {
    throw new Error("useStudentAuth must be used within a StudentAuthProvider");
  }
  return ctx;
}
