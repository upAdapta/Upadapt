export interface jobProfileData{
    job_id: string,
    job_profile: string,
    employment_type: EmploymentType,
    job_location: string,
    experience: string,
    job_description: string[]
}

export enum EmploymentType {
    FULL_TIME = 'Full Time',
    PART_TIME = 'Part Time',
    CONTRACT = 'Contract'
}

export interface FilterItemModel{
    name: string;
    type: string;
}

