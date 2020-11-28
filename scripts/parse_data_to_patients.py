import argparse 
import csv
import random

def load_names():
    with open("data/names.txt") as fp:
        reader = csv.reader(fp)
        return list(reader)

def main(data_file, output_file):
    names = load_names()
    with open(data_file) as fp_in:
        reader = csv.reader(fp_in)
        next(reader) # skip header
        with open(output_file, 'w') as fp_out:
            fp_out.write("patients: Array<Patient> = [\n")
            for line in reader:
                name = random.choice(names)[0]
                fp_out.write("{" +f'name: "{name}", age: {line[2][1:3]}, gender: "{line[1]}", race: "{line[0]}", time_in_hospital: {line[3]}, num_lab_procedures: {line[4]}, num_procedure: {line[5]}, num_medications: {line[6]}, number_outpatient: {line[7]}, number_emergency: {line[8]}, number_inpatient: {line[9]}, number_diagnoses: {line[10]}, max_glu_serum: "{line[11]}", A1Cresult: "{line[12]}", metformin: "{line[13]}", repaglinide: "{line[14]}", nateglinide: "{line[15]}", chlorpropamide: "{line[16]}", glimepiride: "{line[17]}", acetohexamide: "{line[18]}", glipizide: "{line[19]}", glyburide: "{line[20]}", tolbutamide: "{line[21]}", pioglitazone: "{line[22]}", rosiglitazone: "{line[23]}", acarbose: "{line[24]}", miglitol: "{line[25]}",troglitazone: "{line[26]}", tolazamide: "{line[27]}", examide: "{line[28]}", citoglipton: "{line[29]}", insulin: "{line[30]}", glyburide_metformin: "{line[31]}", glipizide_metformin: "{line[32]}", glimepiride_pioglitazone: "{line[33]}", metformin_rosiglitazone: "{line[34]}", metformin_pioglitazone: "{line[35]}", change: "{line[36]}", diabetesMed: "{line[37]}", readmitted: "{line[38]}", _diag_1: "{line[39]}", _diag_2: "{line[40]}", _diag_3: "{line[41]}"' + "},\n")
            fp_out.write(']')


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("data")
    parser.add_argument("output")
    args = parser.parse_args()
    main(args.data, args.output)
