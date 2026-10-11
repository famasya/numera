export function LearningPurpose({
  purpose,
}: {
  purpose: { goal: string; why: string };
}) {
  return (
    <>
      <p className="parent-guide-card">
        <strong>Tujuan belajar:</strong> {purpose.goal}
      </p>
      <p className="parent-guide-card">
        <strong>Mengapa penting:</strong> {purpose.why}
      </p>
    </>
  );
}
