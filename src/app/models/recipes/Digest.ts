import { SubDigest } from "./SubDigest";

export interface Digest {
    label: string
    tag: string
    schemaOrgTag: string
    total: number
    hasRDI: boolean
    daily: number
    unit: string
    sub?: Array<SubDigest>
}