import { z } from "zod";
export declare const IdSchema: z.ZodString;
export type Id = z.infer<typeof IdSchema>;
export declare const GoogleCalendarTokensSchema: z.ZodObject<{
    accessToken: z.ZodString;
    refreshToken: z.ZodString;
    expiryDate: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    accessToken: string;
    refreshToken: string;
    expiryDate: number;
}, {
    accessToken: string;
    refreshToken: string;
    expiryDate: number;
}>;
export type GoogleCalendarTokens = z.infer<typeof GoogleCalendarTokensSchema>;
export declare const UserSchema: z.ZodObject<{
    _id: z.ZodString;
    name: z.ZodString;
    photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodString;
    passwordHash: z.ZodOptional<z.ZodString>;
    googleId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blocked: z.ZodBoolean;
    permissions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    verified: z.ZodOptional<z.ZodBoolean>;
    googleCalendarTokens: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        accessToken: z.ZodString;
        refreshToken: z.ZodString;
        expiryDate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        accessToken: string;
        refreshToken: string;
        expiryDate: number;
    }, {
        accessToken: string;
        refreshToken: string;
        expiryDate: number;
    }>>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    failedLoginAttempts: z.ZodOptional<z.ZodNumber>;
    lockedUntil: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastFailedLoginAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tokenVersion: z.ZodOptional<z.ZodNumber>;
    totpSecret: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    twoFactorEnabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    phone: string;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    photo?: string | null | undefined;
    email?: string | null | undefined;
    passwordHash?: string | undefined;
    googleId?: string | null | undefined;
    permissions?: string[] | undefined;
    verified?: boolean | undefined;
    googleCalendarTokens?: {
        accessToken: string;
        refreshToken: string;
        expiryDate: number;
    } | null | undefined;
    failedLoginAttempts?: number | undefined;
    lockedUntil?: string | null | undefined;
    lastFailedLoginAt?: string | null | undefined;
    tokenVersion?: number | undefined;
    totpSecret?: string | null | undefined;
    twoFactorEnabled?: boolean | undefined;
}, {
    _id: string;
    name: string;
    phone: string;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    photo?: string | null | undefined;
    email?: string | null | undefined;
    passwordHash?: string | undefined;
    googleId?: string | null | undefined;
    permissions?: string[] | undefined;
    verified?: boolean | undefined;
    googleCalendarTokens?: {
        accessToken: string;
        refreshToken: string;
        expiryDate: number;
    } | null | undefined;
    failedLoginAttempts?: number | undefined;
    lockedUntil?: string | null | undefined;
    lastFailedLoginAt?: string | null | undefined;
    tokenVersion?: number | undefined;
    totpSecret?: string | null | undefined;
    twoFactorEnabled?: boolean | undefined;
}>;
export type User = z.infer<typeof UserSchema>;
export declare const BusinessProfileSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodString;
    certificates: z.ZodArray<z.ZodString, "many">;
    status: z.ZodEnum<["pending", "approved", "rejected"]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "approved" | "rejected";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    certificates: string[];
}, {
    status: "pending" | "approved" | "rejected";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    certificates: string[];
}>;
export type BusinessProfile = z.infer<typeof BusinessProfileSchema>;
export declare const TimeSlotSchema: z.ZodObject<{
    open: z.ZodString;
    close: z.ZodString;
    maxAppointments: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    enableGuest: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    requireName: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    requirePhone: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    open: string;
    close: string;
    maxAppointments?: number | null | undefined;
    enableGuest?: boolean | null | undefined;
    requireName?: boolean | null | undefined;
    requirePhone?: boolean | null | undefined;
}, {
    open: string;
    close: string;
    maxAppointments?: number | null | undefined;
    enableGuest?: boolean | null | undefined;
    requireName?: boolean | null | undefined;
    requirePhone?: boolean | null | undefined;
}>;
export type TimeSlot = z.infer<typeof TimeSlotSchema>;
export declare const DayScheduleSchema: z.ZodObject<{
    day: z.ZodNumber;
    slots: z.ZodArray<z.ZodObject<{
        open: z.ZodString;
        close: z.ZodString;
        maxAppointments: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        enableGuest: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        requireName: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        requirePhone: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        open: string;
        close: string;
        maxAppointments?: number | null | undefined;
        enableGuest?: boolean | null | undefined;
        requireName?: boolean | null | undefined;
        requirePhone?: boolean | null | undefined;
    }, {
        open: string;
        close: string;
        maxAppointments?: number | null | undefined;
        enableGuest?: boolean | null | undefined;
        requireName?: boolean | null | undefined;
        requirePhone?: boolean | null | undefined;
    }>, "many">;
    enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    day: number;
    slots: {
        open: string;
        close: string;
        maxAppointments?: number | null | undefined;
        enableGuest?: boolean | null | undefined;
        requireName?: boolean | null | undefined;
        requirePhone?: boolean | null | undefined;
    }[];
    enabled: boolean;
}, {
    day: number;
    slots: {
        open: string;
        close: string;
        maxAppointments?: number | null | undefined;
        enableGuest?: boolean | null | undefined;
        requireName?: boolean | null | undefined;
        requirePhone?: boolean | null | undefined;
    }[];
    enabled?: boolean | undefined;
}>;
export type DaySchedule = z.infer<typeof DayScheduleSchema>;
export declare const OpeningHoursSchema: z.ZodArray<z.ZodObject<{
    day: z.ZodNumber;
    slots: z.ZodArray<z.ZodObject<{
        open: z.ZodString;
        close: z.ZodString;
        maxAppointments: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        enableGuest: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        requireName: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        requirePhone: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        open: string;
        close: string;
        maxAppointments?: number | null | undefined;
        enableGuest?: boolean | null | undefined;
        requireName?: boolean | null | undefined;
        requirePhone?: boolean | null | undefined;
    }, {
        open: string;
        close: string;
        maxAppointments?: number | null | undefined;
        enableGuest?: boolean | null | undefined;
        requireName?: boolean | null | undefined;
        requirePhone?: boolean | null | undefined;
    }>, "many">;
    enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    day: number;
    slots: {
        open: string;
        close: string;
        maxAppointments?: number | null | undefined;
        enableGuest?: boolean | null | undefined;
        requireName?: boolean | null | undefined;
        requirePhone?: boolean | null | undefined;
    }[];
    enabled: boolean;
}, {
    day: number;
    slots: {
        open: string;
        close: string;
        maxAppointments?: number | null | undefined;
        enableGuest?: boolean | null | undefined;
        requireName?: boolean | null | undefined;
        requirePhone?: boolean | null | undefined;
    }[];
    enabled?: boolean | undefined;
}>, "many">;
export type OpeningHours = z.infer<typeof OpeningHoursSchema>;
export declare const PlaceSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodString;
    photo: z.ZodString;
    coverPhoto: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
    address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    openingHours: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        day: z.ZodNumber;
        slots: z.ZodArray<z.ZodObject<{
            open: z.ZodString;
            close: z.ZodString;
            maxAppointments: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            enableGuest: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            requireName: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            requirePhone: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            open: string;
            close: string;
            maxAppointments?: number | null | undefined;
            enableGuest?: boolean | null | undefined;
            requireName?: boolean | null | undefined;
            requirePhone?: boolean | null | undefined;
        }, {
            open: string;
            close: string;
            maxAppointments?: number | null | undefined;
            enableGuest?: boolean | null | undefined;
            requireName?: boolean | null | undefined;
            requirePhone?: boolean | null | undefined;
        }>, "many">;
        enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        day: number;
        slots: {
            open: string;
            close: string;
            maxAppointments?: number | null | undefined;
            enableGuest?: boolean | null | undefined;
            requireName?: boolean | null | undefined;
            requirePhone?: boolean | null | undefined;
        }[];
        enabled: boolean;
    }, {
        day: number;
        slots: {
            open: string;
            close: string;
            maxAppointments?: number | null | undefined;
            enableGuest?: boolean | null | undefined;
            requireName?: boolean | null | undefined;
            requirePhone?: boolean | null | undefined;
        }[];
        enabled?: boolean | undefined;
    }>, "many">>>;
    subscriptionId: z.ZodOptional<z.ZodString>;
    hasActiveSubscription: z.ZodBoolean;
    averageRating: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reviewCount: z.ZodOptional<z.ZodNumber>;
    ratingSum: z.ZodOptional<z.ZodNumber>;
    isBlocked: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    acceptExternal: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    latitude: number;
    longitude: number;
    hasActiveSubscription: boolean;
    isBlocked: boolean;
    acceptExternal: boolean;
    type?: string | null | undefined;
    coverPhoto?: string | null | undefined;
    address?: string | null | undefined;
    openingHours?: {
        day: number;
        slots: {
            open: string;
            close: string;
            maxAppointments?: number | null | undefined;
            enableGuest?: boolean | null | undefined;
            requireName?: boolean | null | undefined;
            requirePhone?: boolean | null | undefined;
        }[];
        enabled: boolean;
    }[] | null | undefined;
    subscriptionId?: string | undefined;
    averageRating?: number | null | undefined;
    reviewCount?: number | undefined;
    ratingSum?: number | undefined;
}, {
    _id: string;
    name: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    latitude: number;
    longitude: number;
    hasActiveSubscription: boolean;
    type?: string | null | undefined;
    coverPhoto?: string | null | undefined;
    address?: string | null | undefined;
    openingHours?: {
        day: number;
        slots: {
            open: string;
            close: string;
            maxAppointments?: number | null | undefined;
            enableGuest?: boolean | null | undefined;
            requireName?: boolean | null | undefined;
            requirePhone?: boolean | null | undefined;
        }[];
        enabled?: boolean | undefined;
    }[] | null | undefined;
    subscriptionId?: string | undefined;
    averageRating?: number | null | undefined;
    reviewCount?: number | undefined;
    ratingSum?: number | undefined;
    isBlocked?: boolean | undefined;
    acceptExternal?: boolean | undefined;
}>;
export type Place = z.infer<typeof PlaceSchema>;
export declare const GeocodedPlaceSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    _id: z.ZodString;
    name: z.ZodString;
    photo: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    coverPhoto: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
    subscriptionId: z.ZodOptional<z.ZodString>;
    hasActiveSubscription: z.ZodBoolean;
    averageRating: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reviewCount: z.ZodOptional<z.ZodNumber>;
    ratingSum: z.ZodOptional<z.ZodNumber>;
    isBlocked: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    acceptExternal: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
} & {
    isGeocoded: z.ZodLiteral<true>;
    displayName: z.ZodString;
    geocodingType: z.ZodString;
    geocodingClass: z.ZodString;
    importance: z.ZodNumber;
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    latitude: number;
    longitude: number;
    address: string;
    hasActiveSubscription: boolean;
    isBlocked: boolean;
    acceptExternal: boolean;
    isGeocoded: true;
    displayName: string;
    geocodingType: string;
    geocodingClass: string;
    importance: number;
    type?: string | null | undefined;
    coverPhoto?: string | null | undefined;
    subscriptionId?: string | undefined;
    averageRating?: number | null | undefined;
    reviewCount?: number | undefined;
    ratingSum?: number | undefined;
}, {
    _id: string;
    name: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    latitude: number;
    longitude: number;
    address: string;
    hasActiveSubscription: boolean;
    isGeocoded: true;
    displayName: string;
    geocodingType: string;
    geocodingClass: string;
    importance: number;
    type?: string | null | undefined;
    coverPhoto?: string | null | undefined;
    subscriptionId?: string | undefined;
    averageRating?: number | null | undefined;
    reviewCount?: number | undefined;
    ratingSum?: number | undefined;
    isBlocked?: boolean | undefined;
    acceptExternal?: boolean | undefined;
}>;
export type GeocodedPlace = z.infer<typeof GeocodedPlaceSchema>;
export declare const BlockingSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodString;
    placeId: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
}, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
}>;
export type Blocking = z.infer<typeof BlockingSchema>;
export declare const BlockingWithUserSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodString;
    placeId: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
} & {
    user: z.ZodObject<{
        _id: z.ZodString;
        name: z.ZodString;
        photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    user: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    };
}, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    user: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    };
}>;
export type BlockingWithUser = z.infer<typeof BlockingWithUserSchema>;
export declare const AppointmentStatusSchema: z.ZodEnum<["pending", "confirmed", "cancelled", "completed", "no_show", "expired"]>;
export type AppointmentStatus = z.infer<typeof AppointmentStatusSchema>;
export declare const AppointmentSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodNullable<z.ZodString>;
    placeId: z.ZodString;
    slotId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scheduledDate: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
    status: z.ZodEnum<["pending", "confirmed", "cancelled", "completed", "no_show", "expired"]>;
    requestedBy: z.ZodEnum<["business", "user"]>;
    requestExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    guest: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        name?: string | null | undefined;
        phone?: string | null | undefined;
    }, {
        name?: string | null | undefined;
        phone?: string | null | undefined;
    }>>>;
    calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    user: z.ZodOptional<z.ZodObject<{
        _id: z.ZodString;
        name: z.ZodString;
        photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }>>;
    place: z.ZodOptional<z.ZodObject<{
        _id: z.ZodString;
        name: z.ZodString;
        photo: z.ZodString;
        address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        name: string;
        photo: string;
        address?: string | null | undefined;
    }, {
        _id: string;
        name: string;
        photo: string;
        address?: string | null | undefined;
    }>>;
    business: z.ZodOptional<z.ZodObject<{
        _id: z.ZodString;
        name: z.ZodString;
        photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "confirmed" | "cancelled" | "completed" | "no_show" | "expired";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string | null;
    placeId: string;
    scheduledDate: string;
    startTime: string;
    endTime: string;
    requestedBy: "user" | "business";
    user?: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    } | undefined;
    slotId?: string | null | undefined;
    business?: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    } | undefined;
    requestExpiresAt?: string | null | undefined;
    notes?: string | null | undefined;
    guest?: {
        name?: string | null | undefined;
        phone?: string | null | undefined;
    } | null | undefined;
    calendarEventId?: string | null | undefined;
    place?: {
        _id: string;
        name: string;
        photo: string;
        address?: string | null | undefined;
    } | undefined;
}, {
    status: "pending" | "confirmed" | "cancelled" | "completed" | "no_show" | "expired";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string | null;
    placeId: string;
    scheduledDate: string;
    startTime: string;
    endTime: string;
    requestedBy: "user" | "business";
    user?: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    } | undefined;
    slotId?: string | null | undefined;
    business?: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    } | undefined;
    requestExpiresAt?: string | null | undefined;
    notes?: string | null | undefined;
    guest?: {
        name?: string | null | undefined;
        phone?: string | null | undefined;
    } | null | undefined;
    calendarEventId?: string | null | undefined;
    place?: {
        _id: string;
        name: string;
        photo: string;
        address?: string | null | undefined;
    } | undefined;
}>;
export type Appointment = z.infer<typeof AppointmentSchema>;
export declare const AppointmentWithUserSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodNullable<z.ZodString>;
    placeId: z.ZodString;
    slotId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scheduledDate: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
    status: z.ZodEnum<["pending", "confirmed", "cancelled", "completed", "no_show", "expired"]>;
    requestedBy: z.ZodEnum<["business", "user"]>;
    requestExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    guest: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        name?: string | null | undefined;
        phone?: string | null | undefined;
    }, {
        name?: string | null | undefined;
        phone?: string | null | undefined;
    }>>>;
    calendarEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    place: z.ZodOptional<z.ZodObject<{
        _id: z.ZodString;
        name: z.ZodString;
        photo: z.ZodString;
        address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        name: string;
        photo: string;
        address?: string | null | undefined;
    }, {
        _id: string;
        name: string;
        photo: string;
        address?: string | null | undefined;
    }>>;
    business: z.ZodOptional<z.ZodObject<{
        _id: z.ZodString;
        name: z.ZodString;
        photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }>>;
} & {
    user: z.ZodObject<{
        _id: z.ZodString;
        name: z.ZodString;
        photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }, {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "confirmed" | "cancelled" | "completed" | "no_show" | "expired";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string | null;
    placeId: string;
    user: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    };
    scheduledDate: string;
    startTime: string;
    endTime: string;
    requestedBy: "user" | "business";
    slotId?: string | null | undefined;
    business?: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    } | undefined;
    requestExpiresAt?: string | null | undefined;
    notes?: string | null | undefined;
    guest?: {
        name?: string | null | undefined;
        phone?: string | null | undefined;
    } | null | undefined;
    calendarEventId?: string | null | undefined;
    place?: {
        _id: string;
        name: string;
        photo: string;
        address?: string | null | undefined;
    } | undefined;
}, {
    status: "pending" | "confirmed" | "cancelled" | "completed" | "no_show" | "expired";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string | null;
    placeId: string;
    user: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    };
    scheduledDate: string;
    startTime: string;
    endTime: string;
    requestedBy: "user" | "business";
    slotId?: string | null | undefined;
    business?: {
        _id: string;
        name: string;
        phone: string;
        photo?: string | null | undefined;
    } | undefined;
    requestExpiresAt?: string | null | undefined;
    notes?: string | null | undefined;
    guest?: {
        name?: string | null | undefined;
        phone?: string | null | undefined;
    } | null | undefined;
    calendarEventId?: string | null | undefined;
    place?: {
        _id: string;
        name: string;
        photo: string;
        address?: string | null | undefined;
    } | undefined;
}>;
export type AppointmentWithUser = z.infer<typeof AppointmentWithUserSchema>;
export declare const TimeLineSlotSchema: z.ZodObject<{
    _id: z.ZodString;
    placeId: z.ZodString;
    date: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
    isBooked: z.ZodBoolean;
    appointmentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: string;
    date: string;
    placeId: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
    appointmentId?: string | null | undefined;
}, {
    _id: string;
    createdAt: string;
    date: string;
    placeId: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
    appointmentId?: string | null | undefined;
}>;
export type TimeLineSlot = z.infer<typeof TimeLineSlotSchema>;
export declare const OtpRecordSchema: z.ZodObject<{
    _id: z.ZodString;
    identifier: z.ZodString;
    code: z.ZodString;
    purpose: z.ZodEnum<["register", "login", "email_change", "phone_change", "forgot_password"]>;
    used: z.ZodBoolean;
    expiresAt: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    _id: string;
    createdAt: string;
    identifier: string;
    purpose: "register" | "login" | "email_change" | "phone_change" | "forgot_password";
    used: boolean;
    expiresAt: string;
}, {
    code: string;
    _id: string;
    createdAt: string;
    identifier: string;
    purpose: "register" | "login" | "email_change" | "phone_change" | "forgot_password";
    used: boolean;
    expiresAt: string;
}>;
export type OtpRecord = z.infer<typeof OtpRecordSchema>;
export declare const SubscriptionPlanSchema: z.ZodObject<{
    _id: z.ZodString;
    name: z.ZodString;
    displayName: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    features: z.ZodArray<z.ZodString, "many">;
    monthlyPrice: z.ZodNumber;
    yearlyPrice: z.ZodNumber;
    appointmentLimit: z.ZodNullable<z.ZodNumber>;
    isActive: z.ZodBoolean;
    most: z.ZodBoolean;
    hasFreeTrial: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    displayName: string;
    features: string[];
    monthlyPrice: number;
    yearlyPrice: number;
    appointmentLimit: number | null;
    isActive: boolean;
    most: boolean;
    description?: string | undefined;
    hasFreeTrial?: boolean | undefined;
}, {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    displayName: string;
    features: string[];
    monthlyPrice: number;
    yearlyPrice: number;
    appointmentLimit: number | null;
    isActive: boolean;
    most: boolean;
    description?: string | undefined;
    hasFreeTrial?: boolean | undefined;
}>;
export type SubscriptionPlan = z.infer<typeof SubscriptionPlanSchema>;
export declare const PlaceSubscriptionSchema: z.ZodObject<{
    _id: z.ZodString;
    placeId: z.ZodString;
    userId: z.ZodString;
    planId: z.ZodString;
    status: z.ZodEnum<["active", "inactive", "cancelled", "expired", "trial"]>;
    billingCycle: z.ZodEnum<["monthly", "yearly"]>;
    currentPeriodStart: z.ZodString;
    currentPeriodEnd: z.ZodString;
    appointmentCount: z.ZodNumber;
    chargilyCheckoutId: z.ZodOptional<z.ZodString>;
    cancelledAt: z.ZodOptional<z.ZodString>;
    trialEndsAt: z.ZodOptional<z.ZodString>;
    wasTrial: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "cancelled" | "expired" | "active" | "inactive" | "trial";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    planId: string;
    billingCycle: "monthly" | "yearly";
    currentPeriodStart: string;
    currentPeriodEnd: string;
    appointmentCount: number;
    chargilyCheckoutId?: string | undefined;
    cancelledAt?: string | undefined;
    trialEndsAt?: string | undefined;
    wasTrial?: boolean | undefined;
}, {
    status: "cancelled" | "expired" | "active" | "inactive" | "trial";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    planId: string;
    billingCycle: "monthly" | "yearly";
    currentPeriodStart: string;
    currentPeriodEnd: string;
    appointmentCount: number;
    chargilyCheckoutId?: string | undefined;
    cancelledAt?: string | undefined;
    trialEndsAt?: string | undefined;
    wasTrial?: boolean | undefined;
}>;
export type PlaceSubscription = z.infer<typeof PlaceSubscriptionSchema>;
export declare const PaymentTransactionSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodString;
    placeSubscriptionId: z.ZodString;
    placeId: z.ZodString;
    amount: z.ZodNumber;
    currency: z.ZodString;
    status: z.ZodEnum<["pending", "completed", "failed", "refunded"]>;
    chargilyCheckoutId: z.ZodString;
    paymentMethod: z.ZodString;
    metadata: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "completed" | "failed" | "refunded";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    chargilyCheckoutId: string;
    placeSubscriptionId: string;
    amount: number;
    currency: string;
    paymentMethod: string;
    metadata: Record<string, string | number | boolean>;
}, {
    status: "pending" | "completed" | "failed" | "refunded";
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    chargilyCheckoutId: string;
    placeSubscriptionId: string;
    amount: number;
    currency: string;
    paymentMethod: string;
    metadata: Record<string, string | number | boolean>;
}>;
export type PaymentTransaction = z.infer<typeof PaymentTransactionSchema>;
export declare const NotificationSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodString;
    title: z.ZodString;
    detail: z.ZodString;
    photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    readed: z.ZodBoolean;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodString, z.ZodBoolean]>>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    title: string;
    detail: string;
    readed: boolean;
    photo?: string | null | undefined;
    meta?: Record<string, string | number | boolean | string[]> | undefined;
}, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    title: string;
    detail: string;
    readed: boolean;
    photo?: string | null | undefined;
    meta?: Record<string, string | number | boolean | string[]> | undefined;
}>;
export type Notification = z.infer<typeof NotificationSchema>;
export declare const PushSubscriptionSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodString;
    endpoint: z.ZodString;
    p256dh: z.ZodString;
    auth: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    endpoint: string;
    p256dh: string;
    auth: string;
}, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    endpoint: string;
    p256dh: string;
    auth: string;
}>;
export type PushSubscription = z.infer<typeof PushSubscriptionSchema>;
export declare const InvoiceSchema: z.ZodObject<{
    _id: z.ZodString;
    photo: z.ZodString;
    description: z.ZodString;
    amount: z.ZodNumber;
    approvalLink: z.ZodString;
    createdBy: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    amount: number;
    approvalLink: string;
    createdBy: string;
}, {
    _id: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    amount: number;
    approvalLink: string;
    createdBy: string;
}>;
export type Invoice = z.infer<typeof InvoiceSchema>;
export declare const InvoiceWithCreatorSchema: z.ZodObject<{
    _id: z.ZodString;
    photo: z.ZodString;
    description: z.ZodString;
    amount: z.ZodNumber;
    approvalLink: z.ZodString;
    createdBy: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
} & {
    creator: z.ZodObject<{
        _id: z.ZodString;
        name: z.ZodString;
        photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        name: string;
        photo?: string | null | undefined;
    }, {
        _id: string;
        name: string;
        photo?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    amount: number;
    approvalLink: string;
    createdBy: string;
    creator: {
        _id: string;
        name: string;
        photo?: string | null | undefined;
    };
}, {
    _id: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    amount: number;
    approvalLink: string;
    createdBy: string;
    creator: {
        _id: string;
        name: string;
        photo?: string | null | undefined;
    };
}>;
export type InvoiceWithCreator = z.infer<typeof InvoiceWithCreatorSchema>;
export declare const ReviewSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodString;
    placeId: z.ZodString;
    rating: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    rating: number;
}, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    rating: number;
}>;
export type Review = z.infer<typeof ReviewSchema>;
export declare const ReviewWithUserSchema: z.ZodObject<{
    _id: z.ZodString;
    userId: z.ZodString;
    placeId: z.ZodString;
    rating: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
} & {
    user: z.ZodObject<{
        _id: z.ZodString;
        name: z.ZodString;
        photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        name: string;
        photo?: string | null | undefined;
    }, {
        _id: string;
        name: string;
        photo?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    user: {
        _id: string;
        name: string;
        photo?: string | null | undefined;
    };
    rating: number;
}, {
    _id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    placeId: string;
    user: {
        _id: string;
        name: string;
        photo?: string | null | undefined;
    };
    rating: number;
}>;
export type ReviewWithUser = z.infer<typeof ReviewWithUserSchema>;
export declare const NotificationsResponseSchema: z.ZodObject<{
    notifications: z.ZodArray<z.ZodObject<{
        _id: z.ZodString;
        userId: z.ZodString;
        title: z.ZodString;
        detail: z.ZodString;
        photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        readed: z.ZodBoolean;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodString, z.ZodBoolean]>>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        _id: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        title: string;
        detail: string;
        readed: boolean;
        photo?: string | null | undefined;
        meta?: Record<string, string | number | boolean | string[]> | undefined;
    }, {
        _id: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        title: string;
        detail: string;
        readed: boolean;
        photo?: string | null | undefined;
        meta?: Record<string, string | number | boolean | string[]> | undefined;
    }>, "many">;
    unreadCount: z.ZodNumber;
    total: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    notifications: {
        _id: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        title: string;
        detail: string;
        readed: boolean;
        photo?: string | null | undefined;
        meta?: Record<string, string | number | boolean | string[]> | undefined;
    }[];
    unreadCount: number;
    total?: number | undefined;
}, {
    notifications: {
        _id: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        title: string;
        detail: string;
        readed: boolean;
        photo?: string | null | undefined;
        meta?: Record<string, string | number | boolean | string[]> | undefined;
    }[];
    unreadCount: number;
    total?: number | undefined;
}>;
export type NotificationsResponse = z.infer<typeof NotificationsResponseSchema>;
export declare const InfiniteNotificationsDataSchema: z.ZodObject<{
    pages: z.ZodArray<z.ZodObject<{
        notifications: z.ZodArray<z.ZodObject<{
            _id: z.ZodString;
            userId: z.ZodString;
            title: z.ZodString;
            detail: z.ZodString;
            photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            readed: z.ZodBoolean;
            meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodString, z.ZodBoolean]>>>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            _id: string;
            createdAt: string;
            updatedAt: string;
            userId: string;
            title: string;
            detail: string;
            readed: boolean;
            photo?: string | null | undefined;
            meta?: Record<string, string | number | boolean | string[]> | undefined;
        }, {
            _id: string;
            createdAt: string;
            updatedAt: string;
            userId: string;
            title: string;
            detail: string;
            readed: boolean;
            photo?: string | null | undefined;
            meta?: Record<string, string | number | boolean | string[]> | undefined;
        }>, "many">;
        unreadCount: z.ZodNumber;
        total: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        notifications: {
            _id: string;
            createdAt: string;
            updatedAt: string;
            userId: string;
            title: string;
            detail: string;
            readed: boolean;
            photo?: string | null | undefined;
            meta?: Record<string, string | number | boolean | string[]> | undefined;
        }[];
        unreadCount: number;
        total?: number | undefined;
    }, {
        notifications: {
            _id: string;
            createdAt: string;
            updatedAt: string;
            userId: string;
            title: string;
            detail: string;
            readed: boolean;
            photo?: string | null | undefined;
            meta?: Record<string, string | number | boolean | string[]> | undefined;
        }[];
        unreadCount: number;
        total?: number | undefined;
    }>, "many">;
    pageParams: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    pages: {
        notifications: {
            _id: string;
            createdAt: string;
            updatedAt: string;
            userId: string;
            title: string;
            detail: string;
            readed: boolean;
            photo?: string | null | undefined;
            meta?: Record<string, string | number | boolean | string[]> | undefined;
        }[];
        unreadCount: number;
        total?: number | undefined;
    }[];
    pageParams: number[];
}, {
    pages: {
        notifications: {
            _id: string;
            createdAt: string;
            updatedAt: string;
            userId: string;
            title: string;
            detail: string;
            readed: boolean;
            photo?: string | null | undefined;
            meta?: Record<string, string | number | boolean | string[]> | undefined;
        }[];
        unreadCount: number;
        total?: number | undefined;
    }[];
    pageParams: number[];
}>;
export type InfiniteNotificationsData = z.infer<typeof InfiniteNotificationsDataSchema>;
export declare const AdminStatsSchema: z.ZodObject<{
    stats: z.ZodObject<{
        users: z.ZodNumber;
        business: z.ZodObject<{
            total: z.ZodNumber;
            pending: z.ZodNumber;
            approved: z.ZodNumber;
            rejected: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            pending: number;
            approved: number;
            rejected: number;
            total: number;
        }, {
            pending: number;
            approved: number;
            rejected: number;
            total: number;
        }>;
        places: z.ZodNumber;
        appointments: z.ZodObject<{
            total: z.ZodNumber;
            pending: z.ZodNumber;
            confirmed: z.ZodNumber;
            completed: z.ZodNumber;
            cancelled: z.ZodNumber;
            no_show: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            pending: number;
            confirmed: number;
            cancelled: number;
            completed: number;
            no_show: number;
            total: number;
        }, {
            pending: number;
            confirmed: number;
            cancelled: number;
            completed: number;
            no_show: number;
            total: number;
        }>;
        expenses: z.ZodNumber;
        revenue: z.ZodObject<{
            total: z.ZodNumber;
            byPlan: z.ZodArray<z.ZodObject<{
                planId: z.ZodString;
                planName: z.ZodString;
                amount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                planId: string;
                amount: number;
                planName: string;
            }, {
                planId: string;
                amount: number;
                planName: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            total: number;
            byPlan: {
                planId: string;
                amount: number;
                planName: string;
            }[];
        }, {
            total: number;
            byPlan: {
                planId: string;
                amount: number;
                planName: string;
            }[];
        }>;
        expensesTotal: z.ZodNumber;
        netBenefit: z.ZodNumber;
        activeSubscriptions: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        business: {
            pending: number;
            approved: number;
            rejected: number;
            total: number;
        };
        users: number;
        places: number;
        appointments: {
            pending: number;
            confirmed: number;
            cancelled: number;
            completed: number;
            no_show: number;
            total: number;
        };
        expenses: number;
        revenue: {
            total: number;
            byPlan: {
                planId: string;
                amount: number;
                planName: string;
            }[];
        };
        expensesTotal: number;
        netBenefit: number;
        activeSubscriptions: number;
    }, {
        business: {
            pending: number;
            approved: number;
            rejected: number;
            total: number;
        };
        users: number;
        places: number;
        appointments: {
            pending: number;
            confirmed: number;
            cancelled: number;
            completed: number;
            no_show: number;
            total: number;
        };
        expenses: number;
        revenue: {
            total: number;
            byPlan: {
                planId: string;
                amount: number;
                planName: string;
            }[];
        };
        expensesTotal: number;
        netBenefit: number;
        activeSubscriptions: number;
    }>;
}, "strip", z.ZodTypeAny, {
    stats: {
        business: {
            pending: number;
            approved: number;
            rejected: number;
            total: number;
        };
        users: number;
        places: number;
        appointments: {
            pending: number;
            confirmed: number;
            cancelled: number;
            completed: number;
            no_show: number;
            total: number;
        };
        expenses: number;
        revenue: {
            total: number;
            byPlan: {
                planId: string;
                amount: number;
                planName: string;
            }[];
        };
        expensesTotal: number;
        netBenefit: number;
        activeSubscriptions: number;
    };
}, {
    stats: {
        business: {
            pending: number;
            approved: number;
            rejected: number;
            total: number;
        };
        users: number;
        places: number;
        appointments: {
            pending: number;
            confirmed: number;
            cancelled: number;
            completed: number;
            no_show: number;
            total: number;
        };
        expenses: number;
        revenue: {
            total: number;
            byPlan: {
                planId: string;
                amount: number;
                planName: string;
            }[];
        };
        expensesTotal: number;
        netBenefit: number;
        activeSubscriptions: number;
    };
}>;
export type AdminStats = z.infer<typeof AdminStatsSchema>;
export declare const AdminUserSchema: z.ZodObject<{
    _id: z.ZodString;
    name: z.ZodString;
    photo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodString;
    blocked: z.ZodBoolean;
    verified: z.ZodOptional<z.ZodBoolean>;
    permissions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    phone: string;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    photo?: string | null | undefined;
    email?: string | null | undefined;
    permissions?: string[] | undefined;
    verified?: boolean | undefined;
}, {
    _id: string;
    name: string;
    phone: string;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    photo?: string | null | undefined;
    email?: string | null | undefined;
    permissions?: string[] | undefined;
    verified?: boolean | undefined;
}>;
export type AdminUser = z.infer<typeof AdminUserSchema>;
export declare const PlaceTypeSchema: z.ZodObject<{
    _id: z.ZodString;
    displayName: z.ZodString;
    photo: z.ZodString;
    isActive: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    _id: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    displayName: string;
    isActive: boolean;
}, {
    _id: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
    displayName: string;
    isActive: boolean;
}>;
export type PlaceType = z.infer<typeof PlaceTypeSchema>;
//# sourceMappingURL=index.d.ts.map