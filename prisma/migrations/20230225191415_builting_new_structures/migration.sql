-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "namePerson" TEXT NOT NULL,
    "agePerson" INTEGER NOT NULL,
    "emailPerson" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonToken" (
    "id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "fk_id_person" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonDependent" (
    "id" TEXT NOT NULL,
    "namePerson" TEXT NOT NULL,
    "emailPerson" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "fk_id_person_on_dependent" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonDependent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountConstant" (
    "id" TEXT NOT NULL,
    "nameOriginAccount" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "dateAccount" TEXT NOT NULL,
    "fk_id_person" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AccountConstant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountVariable" (
    "id" TEXT NOT NULL,
    "nameOriginAccount" TEXT NOT NULL,
    "valueAccount" DOUBLE PRECISION NOT NULL,
    "typeAccount" TEXT NOT NULL,
    "formPayment" TEXT NOT NULL,
    "plannedAccount" BOOLEAN NOT NULL,
    "fk_id_person" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AccountVariable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SteadyIncome" (
    "id" TEXT NOT NULL,
    "incomeOrigin" TEXT NOT NULL,
    "valueIncome" DOUBLE PRECISION NOT NULL,
    "dateIncome" TEXT NOT NULL,
    "fk_id_person" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SteadyIncome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariableIncome" (
    "id" TEXT NOT NULL,
    "incomeOrigin" TEXT NOT NULL,
    "valueIncome" DOUBLE PRECISION NOT NULL,
    "dateIncome" TEXT NOT NULL,
    "fk_id_person" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VariableIncome_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_emailPerson_key" ON "Person"("emailPerson");

-- CreateIndex
CREATE UNIQUE INDEX "Person_cpf_key" ON "Person"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "PersonDependent_cpf_key" ON "PersonDependent"("cpf");

-- AddForeignKey
ALTER TABLE "PersonToken" ADD CONSTRAINT "PersonToken_fk_id_person_fkey" FOREIGN KEY ("fk_id_person") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonDependent" ADD CONSTRAINT "PersonDependent_fk_id_person_on_dependent_fkey" FOREIGN KEY ("fk_id_person_on_dependent") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountConstant" ADD CONSTRAINT "AccountConstant_fk_id_person_fkey" FOREIGN KEY ("fk_id_person") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountVariable" ADD CONSTRAINT "AccountVariable_fk_id_person_fkey" FOREIGN KEY ("fk_id_person") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SteadyIncome" ADD CONSTRAINT "SteadyIncome_fk_id_person_fkey" FOREIGN KEY ("fk_id_person") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariableIncome" ADD CONSTRAINT "VariableIncome_fk_id_person_fkey" FOREIGN KEY ("fk_id_person") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
