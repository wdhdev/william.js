// Functions
export const cap: typeof import("./functions/cap");
export const gravatar: typeof import("./functions/gravatar");
export const id: typeof import("./functions/id");
export const random: typeof import("./functions/random");
export const uuid: typeof import("./functions/uuid");

// Util methods
export const util: {
    getDirs: typeof import("./util/getDirs");
    md5Hex: typeof import("./util/md5Hex");
    removeDuplicates: typeof import("./util/removeDuplicates");
}

// Validation methods
export const validate: {
    discord: typeof import("./validate/discord");
    email: typeof import("./validate/email");
}

// Static values
export const version: string;
